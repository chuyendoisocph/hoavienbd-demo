import Image from "next/image";
import { ConsultationDialog } from "@/components/ConsultationDialog";

interface EventsInvitationProps {
  image: string;
  imageAlt: string;
}

interface EventsVideoProps {
  title: string;
  video: string;
  poster: string;
}

export function EventsInvitation({ image, imageAlt }: EventsInvitationProps) {
  return (
    <section className="bg-[#f5f4ef] py-16 md:py-24 lg:py-28">
      <div className="mx-auto grid w-[min(1180px,calc(100%-32px))] overflow-hidden bg-white shadow-[0_24px_70px_-48px_rgba(26,34,78,0.45)] md:w-[min(1180px,calc(100%-64px))] lg:grid-cols-[1.08fr_0.92fr]">
        <div className="relative min-h-[290px] sm:min-h-[400px] lg:min-h-[560px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 54vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-14 xl:px-16">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand/70">
            HOA VIÊN BÌNH DƯƠNG
          </p>
          <h2 className="mt-4 font-heading text-[34px] font-medium leading-[1.12] text-brand sm:text-[42px] lg:text-[48px]">
            Gìn giữ nét đẹp văn hóa qua từng mùa lễ
          </h2>
          <p className="mt-6 text-[16px] leading-[1.8] text-[#666a77]">
            Kính mời quý gia đình theo dõi lịch sự kiện thường niên tại Hoa Viên Bình Dương
            và liên hệ với chúng tôi để được hướng dẫn thời gian, nội dung chương trình cùng
            các thông tin cần chuẩn bị trước khi tham dự.
          </p>

          <ConsultationDialog
            title="Liên hệ lịch sự kiện"
            interest="lịch sự kiện tại Hoa Viên Bình Dương"
            description="Đội ngũ Hoa Viên sẽ cung cấp lịch tổ chức, nội dung chương trình và hướng dẫn tham dự phù hợp với nhu cầu của gia đình."
            triggerClassName="mt-8 inline-flex min-h-12 w-fit items-center justify-center bg-brand px-7 py-3 text-[13px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#3544b8]"
          >
            LIÊN HỆ LỊCH SỰ KIỆN
          </ConsultationDialog>
        </div>
      </div>
    </section>
  );
}

export function EventsVideo({ title, video, poster }: EventsVideoProps) {
  return (
    <section className="bg-white py-16 md:py-24 lg:py-28">
      <div className="mx-auto w-[min(1120px,calc(100%-32px))] md:w-[min(1120px,calc(100%-64px))]">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-brand/70">
            KHÔNG GIAN HOA VIÊN
          </p>
          <h2 className="mt-4 font-heading text-[34px] font-medium leading-[1.15] text-brand sm:text-[42px] lg:text-[48px]">
            {title}
          </h2>
        </div>

        <div className="mt-9 overflow-hidden bg-[#151937] shadow-[0_24px_70px_-40px_rgba(21,25,55,0.6)] md:mt-12">
          <video
            controls
            preload="metadata"
            poster={poster}
            playsInline
            className="aspect-video w-full object-cover"
          >
            <source src={video} />
            Trình duyệt của quý khách không hỗ trợ phát video.
          </video>
        </div>
      </div>
    </section>
  );
}
