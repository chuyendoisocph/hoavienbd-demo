export interface TourScene {
  id: string;
  title: string;
  description: string;
  panorama: string;
  thumbnail: string;
  pitch: number;
  yaw: number;
  group: "cong-trinh" | "khu-mo";
  /**
   * Vị trí drone lúc chụp, lấy từ siêu dữ liệu DJI của ảnh gốc. `heading` là
   * GimbalYawDegree: hướng la bàn ứng với tâm ảnh (yaw 0 trong Pannellum).
   * `altitude` là độ cao so với điểm cất cánh, tính bằng mét.
   */
  camera: { lat: number; lon: number; altitude: number; heading: number };
  /** Các điểm lân cận nối được bằng mũi tên trong ảnh, theo đường đi trên bản đồ tổng thể. */
  links: string[];
  /**
   * Các khoảng yaw [từ, đến] có vùng làm mờ (công trình bên ngoài hoa viên).
   * Khung nhìn lúc mở một điểm sẽ né các khoảng này. Đo bằng mắt trên ảnh.
   */
  blurredYaws?: Array<[number, number]>;
}

export interface TourLink {
  scene: TourScene;
  /** Vị trí mũi tên trong ảnh của điểm đang đứng. */
  yaw: number;
  pitch: number;
  /** Hướng nhìn khi tới nơi, để người xem vẫn quay mặt theo chiều vừa đi. */
  arrivalYaw: number;
}

const DEG = Math.PI / 180;
const EARTH_RADIUS = 6_371_000;

function normalizeYaw(degrees: number) {
  return ((((degrees + 180) % 360) + 360) % 360) - 180;
}

function bearing(from: TourScene["camera"], to: TourScene["camera"]) {
  const dLon = (to.lon - from.lon) * DEG;
  const y = Math.sin(dLon) * Math.cos(to.lat * DEG);
  const x =
    Math.cos(from.lat * DEG) * Math.sin(to.lat * DEG) -
    Math.sin(from.lat * DEG) * Math.cos(to.lat * DEG) * Math.cos(dLon);
  return Math.atan2(y, x) / DEG;
}

function groundDistance(from: TourScene["camera"], to: TourScene["camera"]) {
  const dy = (to.lat - from.lat) * DEG * EARTH_RADIUS;
  const dx = (to.lon - from.lon) * DEG * EARTH_RADIUS * Math.cos(from.lat * DEG);
  return Math.hypot(dx, dy);
}

function angleBetween(a: number, b: number) {
  return Math.abs(normalizeYaw(a - b));
}

// Chừa thêm vài độ để mép vùng mờ không lấp ló ở rìa màn hình.
const BLUR_MARGIN = 6;

/**
 * Hướng nhìn gần `yaw` nhất mà cả khung hình rộng `hfov` không chạm vùng mờ nào.
 * Không có hướng nào sạch (khung quá rộng) thì giữ nguyên `yaw`.
 */
export function clearViewYaw(scene: TourScene, yaw: number, hfov: number) {
  const ranges = scene.blurredYaws ?? [];
  const half = hfov / 2 + BLUR_MARGIN;
  const touchesBlur = (center: number) =>
    ranges.some(([from, to]) => angleBetween(center, (from + to) / 2) < half + (to - from) / 2);

  if (!touchesBlur(yaw)) return yaw;
  const candidates = ranges
    .flatMap(([from, to]) => [from - half - 1, to + half + 1])
    .map(normalizeYaw)
    .filter((candidate) => !touchesBlur(candidate));
  if (candidates.length === 0) return yaw;
  return candidates.reduce((best, candidate) =>
    angleBetween(candidate, yaw) < angleBetween(best, yaw) ? candidate : best,
  );
}

/**
 * Đặt mũi tên đúng chỗ điểm đến nằm dưới mặt đất trong ảnh: lệch ngang bằng
 * phương vị GPS trừ hướng camera, chúc xuống theo độ cao bay và khoảng cách.
 */
export function getTourLinks(scene: TourScene): TourLink[] {
  return scene.links.flatMap((id) => {
    const target = TOUR_SCENES.find((item) => item.id === id);
    if (!target) return [];
    const direction = bearing(scene.camera, target.camera);
    const distance = groundDistance(scene.camera, target.camera);
    return [{
      scene: target,
      yaw: normalizeYaw(direction - scene.camera.heading),
      // Giữ trong khoảng nhìn được: xa quá sẽ dính đường chân trời, gần quá sẽ chui xuống đáy ảnh.
      pitch: Math.min(-4, Math.max(-45, -Math.atan2(scene.camera.altitude, distance) / DEG)),
      arrivalYaw: normalizeYaw(direction - target.camera.heading),
    }];
  });
}

export const TOUR_SCENES: TourScene[] = [
  {
    id: "cong-1",
    title: "Cổng Hoa Viên",
    description: "Điểm khởi đầu hành trình tham quan Hoa Viên Bình Dương.",
    panorama: "/images/360/cong-1.webp",
    thumbnail: "/images/360/cong-1-tour-thumb.webp",
    pitch: -30,
    yaw: 0,
    group: "cong-trinh",
    camera: { lat: 11.1684116, lon: 106.6517404, altitude: 30.6, heading: -25.7 },
    links: ["vinh-hang-dai"],
  },
  {
    id: "vinh-hang-dai",
    title: "Vĩnh Hằng Đài",
    description: "Công trình điểm nhấn giữa không gian cây xanh.",
    panorama: "/images/360/vinh-hang-dai.webp",
    thumbnail: "/images/360/vinh-hang-dai-tour-thumb.webp",
    pitch: -30,
    yaw: 0,
    group: "cong-trinh",
    camera: { lat: 11.1703453, lon: 106.6509375, altitude: 40.2, heading: -26.5 },
    links: ["cong-1", "dai-lo-vinh-hang"],
  },
  {
    id: "dai-lo-vinh-hang",
    title: "Đại Lộ Vĩnh Hằng",
    description: "Trục cảnh quan chính nhìn từ trên cao.",
    panorama: "/images/360/dai-lo-vinh-hang.webp",
    thumbnail: "/images/360/dai-lo-vinh-hang-tour-thumb.webp",
    pitch: -20,
    yaw: 0,
    group: "cong-trinh",
    camera: { lat: 11.1717227, lon: 106.6503732, altitude: 67.2, heading: -21.4 },
    links: ["vinh-hang-dai", "linh-hoa-tue-dan", "khu-b3-1"],
    blurredYaws: [[40, 78]],
  },
  {
    id: "linh-hoa-tue-dan",
    title: "Linh Hoa Tuệ Đàn",
    description: "Công trình Linh Hoa Tuệ Đàn và cảnh quan xung quanh nhìn từ trên cao.",
    panorama: "/images/360/linh-hoa-tue-dan.webp",
    thumbnail: "/images/360/linh-hoa-tue-dan-tour-thumb.webp",
    pitch: -28,
    yaw: 0,
    group: "cong-trinh",
    camera: { lat: 11.1729427, lon: 106.6498722, altitude: 39, heading: -26.5 },
    links: ["dai-lo-vinh-hang", "khu-b22"],
  },
  {
    id: "me-viet-nam-anh-hung",
    title: "Mẹ Việt Nam Anh Hùng",
    description: "Không gian tưởng niệm Mẹ Việt Nam Anh Hùng trong hoa viên.",
    panorama: "/images/360/me-viet-nam-anh-hung.webp",
    thumbnail: "/images/360/me-viet-nam-anh-hung-tour-thumb.webp",
    pitch: -28,
    yaw: 0,
    group: "cong-trinh",
    camera: { lat: 11.1746322, lon: 106.6531646, altitude: 18.7, heading: 90.1 },
    links: ["khu-b22", "khu-coi-nguon"],
  },
  {
    id: "chua-thien-phuoc",
    title: "Chùa Thiên Phước",
    description: "Không gian tâm linh trong khuôn viên hoa viên.",
    panorama: "/images/360/chua-thien-phuoc.webp",
    thumbnail: "/images/360/chua-thien-phuoc-tour-thumb.webp",
    pitch: -23,
    yaw: 0,
    group: "cong-trinh",
    camera: { lat: 11.1769268, lon: 106.6529835, altitude: 52.3, heading: 6.7 },
    links: ["khu-coi-nguon", "hon-viet", "khu-mo-gia-toc"],
    blurredYaws: [[38, 152]],
  },
  {
    id: "hon-viet",
    title: "Hồn Việt",
    description: "Một góc cảnh quan và kiến trúc của hoa viên.",
    panorama: "/images/360/hon-viet.webp",
    thumbnail: "/images/360/hon-viet-tour-thumb.webp",
    pitch: -24,
    yaw: 0,
    group: "cong-trinh",
    camera: { lat: 11.1818406, lon: 106.6531184, altitude: 58, heading: -2.1 },
    links: ["chua-thien-phuoc", "khu-mo-gia-toc", "khu-g733"],
  },
  {
    id: "dai-hoa-than-hoan-vu",
    title: "Đài Hóa Thân Hoàn Vũ",
    description: "Công trình và không gian xung quanh nhìn từ góc cao.",
    panorama: "/images/360/dai-hoa-than-hoan-vu.webp",
    thumbnail: "/images/360/dai-hoa-than-hoan-vu-tour-thumb.webp",
    pitch: -22,
    yaw: 0,
    group: "cong-trinh",
    camera: { lat: 11.1816684, lon: 106.6568107, altitude: 63.5, heading: 21.5 },
    links: ["khu-g733", "khu-f"],
    blurredYaws: [[82, 162]],
  },
  {
    id: "khu-f",
    title: "Khu F",
    description: "Toàn cảnh khu F nhìn từ trên cao.",
    panorama: "/images/360/khu-f.webp",
    thumbnail: "/images/360/khu-f-tour-thumb.webp",
    pitch: -28,
    yaw: 0,
    group: "khu-mo",
    camera: { lat: 11.1831455, lon: 106.6566114, altitude: 67.2, heading: 88.6 },
    links: ["khu-g733", "dai-hoa-than-hoan-vu"],
    blurredYaws: [[43, 102]],
  },
  {
    id: "khu-g733",
    title: "Khu G733",
    description: "Toàn cảnh khu G733 giữa không gian xanh của hoa viên.",
    panorama: "/images/360/khu-g733.webp",
    thumbnail: "/images/360/khu-g733-tour-thumb.webp",
    pitch: -28,
    yaw: 0,
    group: "khu-mo",
    camera: { lat: 11.1821107, lon: 106.6554592, altitude: 51.7, heading: -77.9 },
    links: ["hon-viet", "dai-hoa-than-hoan-vu", "khu-f"],
    blurredYaws: [[-172, -112]],
  },
  {
    id: "khu-mo-gia-toc",
    title: "Khu Mộ Gia Tộc",
    description: "Toàn cảnh khu mộ gia tộc nhìn từ trên cao.",
    panorama: "/images/360/khu-mo-gia-toc.webp",
    thumbnail: "/images/360/khu-mo-gia-toc-tour-thumb.webp",
    pitch: -28,
    yaw: 0,
    group: "khu-mo",
    camera: { lat: 11.1809933, lon: 106.649409, altitude: 41, heading: -48.7 },
    links: ["chua-thien-phuoc", "hon-viet"],
  },
  {
    id: "khu-coi-nguon",
    title: "Khu Cội Nguồn",
    description: "Khám phá cảnh quan khu Cội Nguồn.",
    panorama: "/images/360/khu-coi-nguon.webp",
    thumbnail: "/images/360/khu-coi-nguon-tour-thumb.webp",
    pitch: -25,
    yaw: 0,
    group: "khu-mo",
    camera: { lat: 11.1760996, lon: 106.6524095, altitude: 49, heading: 90.4 },
    links: ["me-viet-nam-anh-hung", "khu-b3", "chua-thien-phuoc"],
    blurredYaws: [[-33, 37]],
  },
  {
    id: "khu-b3",
    title: "Khu B3",
    description: "Toàn cảnh khu B3 và hệ thống lối đi giữa các phần mộ.",
    panorama: "/images/360/khu-b3.webp",
    thumbnail: "/images/360/khu-b3-tour-thumb.webp",
    pitch: -28,
    yaw: 0,
    group: "khu-mo",
    camera: { lat: 11.1755158, lon: 106.6520307, altitude: 62.9, heading: -102.1 },
    links: ["khu-b22", "khu-coi-nguon"],
    blurredYaws: [[-180, -122]],
  },
  {
    id: "khu-b22",
    title: "Khu B22",
    description: "Cảnh quan và các vị trí an nghỉ trong khu B22.",
    panorama: "/images/360/khu-b22.webp",
    thumbnail: "/images/360/khu-b22-tour-thumb.webp",
    pitch: -28,
    yaw: 0,
    group: "khu-mo",
    camera: { lat: 11.1736468, lon: 106.652215, altitude: 43.9, heading: -14.6 },
    links: ["linh-hoa-tue-dan", "khu-b3-1", "me-viet-nam-anh-hung", "khu-b3"],
    blurredYaws: [[48, 102]],
  },
  {
    id: "khu-b3-1",
    title: "Khu B3.1",
    description: "Góc nhìn trên cao của khu B3.1.",
    panorama: "/images/360/khu-b3-1.webp",
    thumbnail: "/images/360/khu-b3-1-tour-thumb.webp",
    pitch: -28,
    yaw: 0,
    group: "khu-mo",
    camera: { lat: 11.1726002, lon: 106.6528761, altitude: 67.9, heading: -105.9 },
    links: ["dai-lo-vinh-hang", "khu-b22"],
    blurredYaws: [[-180, -118]],
  },
];
