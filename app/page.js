"use client";
import Image from 'next/image';
import './globals.css';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import "swiper/css";
import "swiper/css/effect-cards";
import IntroVideoSection from '@/components/Review/IntroVideoSection ';
import { Dialog, DialogPanel, DialogBackdrop } from '@headlessui/react'
import { Send, Phone, Mail, MapPin, Facebook, Twitter, Linkedin } from "lucide-react"

export default function Home() {
     const [formData, setFormData] = useState({
          name: '',
          email: '',
          phone: '',
          question: '',
     });
     const [open1, setOpen1] = useState(false)
     const [open2, setOpen2] = useState(false)
     const [open3, setOpen3] = useState(false)
     const [open4, setOpen4] = useState(false)
     const [open5, setOpen5] = useState(false)


     useEffect(() => {
          oncanplay
          AOS.init({
               duration: 1000,
               easing: 'ease-out',
               once: true
          });
     }, []);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: value,
          }));
     };

     const handleSubmit = () => {
          alert("Bạn gửi thông tin thành công")
          // Chỉ reset input, không làm gì thêm
          setFormData({
               name: '',
               email: '',
               phone: '',
               question: '',
          });
     };

     return (
          <main>
               {/* Hero Section */}
               <section style={{ position: 'relative', overflow: 'visible' }} id='#' className='relative w-full h-screen max-h-[848px]'>
                    <Image src='/images/header.png' alt='Header Image' fill priority className='object-cover brightness-[0.85]' />
                    <div data-aos='fade-down '>
                         <div className='absolute inset-0 w-full h-full bg-gradient-to-b from-black/40 to-Taohtransparent'>
                              {/* Navigation */}
                              <Navbar />

                              {/* Hero Content */}
                              <div className='mt-[150px] sm:mt-0 container mx-auto px-4 h-[calc(100%-60px)] flex items-center'>
                                   <div className='flex flex-col lg:flex-row     items-center justify-between gap-8 w-full'>
                                        <div data-aos='fade-down' className='lg:ml-[100px] text-white w-full lg:max-w-[600px]'>
                                             <p className='text-[20px] font-light leading-[34px] w-full lg:w-[512px] text-center lg:text-left animate-fadeIn'>🔷 Giới thiệu về chúng tôi</p>
                                             <h1 className='text-[36px] lg:text-[48px] leading-[46px] lg:leading-[62.5px] bg-gradient-to-r from-[#00FF7B] to-[#00E0FF] text-transparent bg-clip-text font-bold w-full lg:w-[536px] text-center lg:text-left mt-2 '>Tạo ra các giải pháp thông minh và độc đáo</h1>
                                             <p className='text-[18px] font-light lg:text-[20px] leading-[30px] lg:leading-[34px] mt-4 w-full lg:w-[640px] text-center text-justify'>EG Team là một đội ngũ công nghệ trong lĩnh vực Blockchain, Web3 và DePIN. Chúng tôi quy tụ những bộ óc đổi mới với kinh nghiệm thực chiến trong việc xây dựng các nền tảng Blockchain hiệu suất cao, bảo mật và thân thiện với người dùng.</p>
                                             {/* <div className='mt-8 flex justify-center lg:justify-start'>
                                                  <button className='px-8 py-3 bg-gradient-to-r from-[#00FF7B] to-[#00E0FF] text-black font-medium rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105'>Tìm hiểu thêm</button>
                                             </div> */}
                                        </div>

                                        <div data-aos='fade-down'>
                                             <div className='w-full lg:mr-[100px] lg:w-[500px] lg:h-[500px] h-[300px] relative mt-8 lg:mt-0 '>
                                                  <Image src='/images/teamwork.png' alt='Minh họa' fill className='object-contain' />
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* About Section */}
               <section className='relative w-full py-20'>
                    <Image src='/images/Group.png' alt='Background Image' fill className='object-cover' />
                    <div className='container mx-auto relative z-10'>
                         <div data-aos='fade-right' className='flex flex-col lg:flex-row items-center justify-around gap-12'>
                              <div className='w-full h-[300px] lg:w-[623px] lg:h-[501px] relative lg:ml-[46px] animate-float'>
                                   <Image src='/images/people.png' alt='Minh họa' fill className='object-contain' />
                              </div>

                              <div className='lg:mr-[100px] max-w-[660px]'>
                                   <h2 className='text-[24px] md:text-[30px] lg:text-[36px] font-bold leading-[36px] md:leading-[42px] lg:leading-[48px] bg-gradient-to-r from-[#00D768] to-[#007137] text-transparent bg-clip-text text-center lg:text-left mb-6'>PHÁT TRIỂN GIẢI PHÁP BLOCKCHAIN</h2>
                                   <p className='text-[#8198A4] text-[16px] md:text-[17px] lg:text-[18px] font-normal leading-[26px] md:leading-[28px] lg:leading-[30px] text-justify'>
                                        EG TEAM là đội ngũ chuyên gia nghiên cứu và phát triển công nghệ tiên tiến, tập trung vào các lĩnh vực chủ chốt như Blockchain, Trí tuệ nhân tạo (AI), Web3, Hạ tầng phi tập trung (DePIN), Sàn giao dịch tài sản số và Internet of Things (IoT). Với sứ mệnh kiến tạo những giải pháp đột phá và đóng góp vào sự phát triển của nền công nghệ số toàn cầu, EG TEAM không ngừng đổi mới và ứng dụng công nghệ để mang lại giá trị thực tiễn cho cộng đồng và doanh nghiệp.
                                        Chúng tôi đồng hành cùng các đối tác trong việc xây dựng hệ sinh thái công nghệ hiện đại, minh bạch và bền vững.
                                   </p>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Team Section */}
               <section id='team' className='relative w-full py-20 overflow-hidden bg-team-bg'>
                    <div className='absolute inset-0 z-0'>
                         <Image src='/images/background.png' alt='Background' fill className='object-cover opacity-20' />
                         <div className='absolute inset-0 bg-team-rays'></div>
                    </div>

                    <div data-aos='fade-left' className='relative z-10'>
                         <div className='text-center'>
                              <h2 className='text-[28px] md:text-[32px] lg:text-[40px] font-bold text-center bg-gradient-to-r from-[#00FF7B] to-[#00E0FF] text-transparent bg-clip-text'>THÀNH VIÊN CHỦ CHỐT</h2>
                              <div className='h-[2px] w-full max-w-[800px] mx-auto bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mt-3'></div>
                         </div>
                    </div>

                    <div className='container mx-auto px-4 mt-20 relative z-10'>
                         {/* Decorative Elements */}
                         <div className='absolute w-4 h-4 bg-[#00E0FF] rounded-full top-10 right-10 animate-pulse-slow'></div>
                         <div className='absolute w-6 h-6 border-2 border-[#00D768] top-40 left-10 rotate-45'></div>
                         <div className='absolute w-3 h-3 bg-[#00FF7B] rounded-full left-[15%] bottom-20 animate-pulse'></div>
                         <div className='absolute w-8 h-8 border border-[#00E0FF]/30 rounded-full right-[15%] top-[30%] animate-pulse-slow'></div>

                         {/* Team Members Carousel */}
                         <div data-aos='fade-left' className='relative px-10 '>
                              <div className='flex flex-wrap justify-center gap-8 md:gap-6'>
                                   {/* Team Member 1 */}
                                   <div className='w-full md:w-[220px] group transition-all duration-500 hover:scale-105 cursor-pointer'>
                                        <div onClick={() => setOpen1(true)} className='relative p-6 rounded-2xl border border-[#00E0FF] bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] h-full'>
                                             {/* A */}
                                             <div className='w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.15)] to-[rgba(0,224,255,0.15)] border-2 border-[#00E0FF]/40 group-hover:border-[#00E0FF]/70 transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/80 flex items-center justify-center text-2xl font-bold text-[#00E0FF]/80'>
                                                       <Image src='/images/_kieuanh.jpg' alt='Kiều Anh' width={110} height={110} className='rounded-full object-cover' />
                                                  </div>
                                             </div>
                                             <h3 className='text-lg font-bold text-center mb-2 text-[#017479] transition-colors duration-300'>Kiều Anh</h3>
                                             <p className='text-[#00E0FF]/80 text-center text-sm text-[#017479]'>Smart Contract Dev</p>
                                             <div className='h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00FF7B]/50 to-[#00E0FF]/50 mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>

                                        {/* Modal Dialog */}
                                        <Dialog open={open1} onClose={() => setOpen1(false)} className="relative z-50">
                                             <DialogBackdrop
                                                  transition
                                                  className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
                                             />

                                             <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                       <DialogPanel transition className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in w-[700px] data-[closed]:scale-95">
                                                            {/* Header Section */}
                                                            <div className="bg-gradient-to-r from-cyan-100 to-cyan-50 p-6 relative">
                                                                 <div className="flex items-start gap-4">
                                                                      <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-cyan-200 flex-shrink-0 overflow-hidden">
                                                                           <Image
                                                                                src="/images/_kieuanh.jpg"
                                                                                alt="Kiều Anh"
                                                                                width={110}
                                                                                height={110}
                                                                                className="rounded-full object-cover"
                                                                           />
                                                                      </div>
                                                                      <div className="flex-1">
                                                                           <h1 className="text-2xl font-bold text-gray-900 mb-1">Nguyễn Tô Kiều Anh</h1>
                                                                           <p className="text-cyan-500 font-semibold text-lg mb-2">Smart Contract Developer</p>
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            {/* Content Section */}
                                                            <div className="p-6 space-y-6">
                                                                 {/* Introduction */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Giới thiệu</h2>
                                                                      <p className="text-gray-700 text-base leading-relaxed text-justify font-medium">
                                                                           Chào mọi người! Mình là Kiều Anh, công việc hằng ngày của mình là nói chuyện với Solidity  và đảm bảo hợp đồng không có... cửa hậu!
                                                                           <br></br>
                                                                           Ngoài công việc, mình thích đọc manga và đi bơi ở những nơi vắng người sử dụng hồ bơi.
                                                                           Mình rất yêu thích DeFi và luôn mơ về việc viết một contract “triệu người dùng” trong tương lai.
                                                                           Trong team, mình là người kỹ tính, luôn double-check mọi thứ trước khi deploy.
                                                                           Mình tin rằng: một dòng code an toàn hơn cả trăm lời xin lỗi khi có lỗi xảy ra.
                                                                           Điều mình học được khi làm dự án là: không ai mạnh mãi, chỉ có teamwork là mãi đỉnh!
                                                                           Blockchain cho mình cảm giác như khám phá vùng đất mới – nhiều tiềm năng, nhiều thử thách.
                                                                           Hy vọng qua dự án này, mình có thể tiến gần hơn đến ước mơ làm dev trong một startup Web3.

                                                                      </p>
                                                                 </div>

                                                                 {/* Education */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Học vấn</h2>
                                                                      <p className="text-gray-700 text-base font-medium">Đại học</p>
                                                                 </div>
                                                            </div>
                                                       </DialogPanel>
                                                  </div>
                                             </div>
                                        </Dialog>
                                   </div>

                                   {/* Team Member 2 */}
                                   <div className='w-full md:w-[220px] group transition-all duration-500 hover:scale-105 cursor-pointer'>
                                        <div onClick={() => setOpen2(true)} className='relative p-6 rounded-2xl border border-[#00E0FF] bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] h-full'>
                                             <div className='w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.15)] to-[rgba(0,224,255,0.15)] border-2 border-[#00E0FF]/40 group-hover:border-[#00E0FF]/70 transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/80 flex items-center justify-center text-2xl font-bold text-[#00E0FF]/80'>
                                                       <Image src='/images/_minhduy.jpg' alt='Minh Duy' width={110} height={110} className='rounded-full object-cover' />
                                                  </div>
                                             </div>
                                             <h3 className='text-lg font-bold text-center text-[#017479] mb-2 transition-colors duration-300'>Minh Duy</h3>
                                             <p className='text-center text-sm text-[#017479]'>UI/UX Designer</p>
                                             <div className='h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00FF7B]/50 to-[#00E0FF]/50 mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>
                                        {/* Modal Dialog */}
                                        <Dialog open={open2} onClose={() => setOpen2(false)} className="relative z-50">
                                             <DialogBackdrop transition className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in" />

                                             <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                       <DialogPanel transition className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in w-[700px] data-[closed]:scale-95">
                                                            {/* Header Section */}
                                                            <div className="bg-gradient-to-r from-cyan-100 to-cyan-50 p-6 relative">
                                                                 <div className="flex items-start gap-4">
                                                                      <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-cyan-200 flex-shrink-0 overflow-hidden">
                                                                           <Image
                                                                                src="/images/_minhduy.jpg"
                                                                                alt="Minh Duy"
                                                                                width={110}
                                                                                height={110}
                                                                                className="rounded-full object-cover"
                                                                           />
                                                                      </div>
                                                                      <div className="flex-1 pt-2">
                                                                           <h1 className="text-2xl font-bold text-gray-900 mb-1">Hồ Minh Duy</h1>
                                                                           <p className="text-cyan-500 font-semibold text-lg mb-2">UI/UX Designer</p>
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            {/* Content Section */}
                                                            <div className="p-6 space-y-6">
                                                                 {/* Introduction */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Giới thiệu</h2>
                                                                      <p className="text-gray-700 text-base leading-relaxed text-justify font-medium">
                                                                           Xin chào! Mình là Minh Duy, mình đề cao sự ổn định và tin cậy, bởi một hệ thống chỉ thực sự tốt khi hoạt động ổn định trong mọi điều kiện.
                                                                           <br></br>
                                                                           Vai trò của mình là cầu nối giữa phát triển và chất lượng, đảm bảo sản phẩm hoàn chỉnh khi đến tay người dùng.
                                                                           Khi làm việc, mình thường tạo ra nhiều lỗi để… fix và học. Cứ vấp rồi mới nhớ lâu!
                                                                           Mình thích cảm giác “tìm ra bug trước khi người dùng thấy nó” – cảm giác như giải một câu đố lớn.
                                                                           Mình luôn tin rằng sản phẩm chỉ thực sự tốt khi được kiểm thử kỹ càng, dù backend hay blockchain.
                                                                           Ngoài đời, mình là người khá hài hước và thường xuyên “tấu hài” khi team đang stress vì deadline.
                                                                           Tham gia dự án giúp mình học được nhiều thứ hơn là chỉ code – còn là tư duy hệ thống.
                                                                           Rất vui vì được là một phần trong hành trình xây dựng blockchain từ con số 0!
                                                                      </p>
                                                                 </div>

                                                                 {/* Education */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Học vấn</h2>
                                                                      <p className="text-gray-700 text-base leading-relaxed text-justify font-medium">Đại học</p>
                                                                 </div>
                                                            </div>
                                                       </DialogPanel>
                                                  </div>
                                             </div>
                                        </Dialog>
                                   </div>

                                   {/* Team Member 3 - Center (Featured) */}
                                   <div className='w-full md:w-[280px] z-10 group transition-all duration-500 hover:scale-105 cursor-pointer'>
                                        <div onClick={() => setOpen3(true)} className='relative p-7 rounded-2xl border-2 border-[#00E0FF] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,224,255,0.5)] h-full'>
                                             <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00FF7B] to-[#00D768] text-black text-xs font-bold py-1.5 px-4 rounded-full shadow-lg'>Đội trưởng</div>
                                             <div className='w-36 h-36 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.3)] to-[rgba(0,224,255,0.3)] border-2 border-[#00E0FF] group-hover:shadow-[0_0_15px_rgba(0,224,255,0.5)] transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/70 flex items-center justify-center text-3xl font-bold text-[#00E0FF]'>
                                                       <Image src='/images/_hinphat.jpg' alt='Hỉn Phát' width={160} height={160} className='rounded-full object-cover' />
                                                  </div>
                                             </div>
                                             <h3 className='text-xl font-bold text-center mb-2 text-[#017479] transition-colors duration-300'>Lìu Hìn Phát</h3>
                                             <p className='text-[#00E0FF] text-center text-[#017479]'>Blockchain Architect</p>
                                             <div className='h-0.5 w-1/3 group-hover:w-full bg-gradient-to-r from-[#00FF7B] to-[#00E0FF] mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>

                                        {/* Modal Dialog */}
                                        <Dialog open={open3} onClose={() => setOpen3(false)} className="relative z-50">
                                             <DialogBackdrop transition className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in" />

                                             <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                       <DialogPanel transition className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in w-[700px] data-[closed]:scale-95">
                                                            {/* Header Section */}
                                                            <div className="bg-gradient-to-r from-cyan-100 to-cyan-50 p-6 relative">
                                                                 <div className="flex items-start gap-4">
                                                                      <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-cyan-200 flex-shrink-0 overflow-hidden">
                                                                           <Image
                                                                                src="/images/_hinphat.jpg"
                                                                                alt="Hỉn Phát"
                                                                                width={110}
                                                                                height={110}
                                                                                className="rounded-full object-cover"
                                                                           />
                                                                      </div>
                                                                      <div className="flex-1 pt-2">
                                                                           <h1 className="text-2xl font-bold text-gray-900 mb-1">Lìu Hỉn Phát</h1>
                                                                           <p className="text-cyan-500 font-semibold text-lg mb-2">Blockchain Architect</p>
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            {/* Content Section */}
                                                            <div className="p-6 space-y-6">
                                                                 {/* Introduction */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Giới thiệu</h2>
                                                                      <p className="text-gray-700 text-base leading-relaxed text-justify font-medium">
                                                                           Xin chào mọi người! Mình là Hỉn Phát, thủ lĩnh tinh thần (và cả deadline) của team Blockchain!
                                                                           Mình có niềm đam mê mãnh liệt với những dòng code tạo nên thế giới phi tập trung.
                                                                           Công việc chính của mình là định hướng kiến trúc chuỗi khối, tối ưu thuật toán đồng thuận và… hối team làm bài.
                                                                           Ngoài giờ làm việc căng thẳng, mình thích đọc whitepaper, đọc thử testnet và thỉnh thoảng cuối tuần sẽ tổ chức offline cùng team.
                                                                           Là người cầu toàn, mình luôn muốn mọi thứ thật chỉnh chu từ dòng code đến slide thuyết trình.
                                                                           Đối với mình, làm việc nhóm không chỉ là hoàn thành task mà còn là phát triển cùng nhau.
                                                                           Dự án lần này là bước đi táo bạo nhưng mình tin vào sức mạnh của team.
                                                                           Rất vui được đồng hành cùng mọi người trên hành trình khám phá Blockchain!

                                                                      </p>
                                                                 </div>

                                                                 {/* Education */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Học vấn</h2>
                                                                      <p className="text-gray-700 text-base leading-relaxed text-justify font-medium">Đại học</p>
                                                                 </div>
                                                            </div>
                                                       </DialogPanel>
                                                  </div>
                                             </div>
                                        </Dialog>
                                   </div>

                                   {/* Team Member 4 */}
                                   <div className='w-full md:w-[220px] group transition-all duration-500 hover:scale-105 cursor-pointer'>
                                        <div onClick={() => setOpen4(true)} className='relative p-6 rounded-2xl border border-[#00E0FF] bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] h-full'>
                                             <div className='w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.15)] to-[rgba(0,224,255,0.15)] border-2 border-[#00E0FF]/40 group-hover:border-[#00E0FF]/70 transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/80 flex items-center justify-center text-2xl font-bold text-[#00E0FF]/80'>
                                                       <Image src='/images/_haidang.jpg' alt='Chương Toàn' width={110} height={110} className='rounded-full object-cover' />
                                                  </div>
                                             </div>
                                             <h3 className='text-lg font-bold text-center mb-2 text-[#017479] transition-colors duration-300'>Hải Đăng</h3>
                                             <p className='text-[#00E0FF]/80 text-center text-sm text-[#017479]'>Blockchain Dev</p>
                                             <div className='h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00FF7B]/50 to-[#00E0FF]/50 mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>

                                        {/* Modal Dialog */}
                                        <Dialog open={open4} onClose={() => setOpen4(false)} className="relative z-50">
                                             <DialogBackdrop transition className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in" />

                                             <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                       <DialogPanel transition className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in w-[700px] data-[closed]:scale-95">
                                                            {/* Header Section */}
                                                            <div className="bg-gradient-to-r from-cyan-100 to-cyan-50 p-6 relative">
                                                                 <div className="flex items-start gap-4">
                                                                      <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-cyan-200 flex-shrink-0 overflow-hidden">
                                                                           <Image
                                                                                src="/images/_haidang.jpg"
                                                                                alt="Minh Duy"
                                                                                width={110}
                                                                                height={110}
                                                                                className="rounded-full object-cover"
                                                                           />
                                                                      </div>
                                                                      <div className="flex-1 pt-2">
                                                                           <h1 className="text-2xl font-bold text-gray-900 mb-1">Mai Hải Đăng</h1>
                                                                           <p className="text-cyan-500 font-semibold text-lg mb-2">Blockchain Developer</p>
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            {/* Content Section */}
                                                            <div className="p-6 space-y-6">
                                                                 {/* Introduction */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Giới thiệu</h2>
                                                                      <p className="text-gray-700 text-base leading-relaxed text-justify font-medium">
                                                                           Hello mọi người! Mình là Hải Đăng, người thích “đào sâu” vào cấu trúc lõi của Blockchain.
                                                                           Mình phụ trách phần consensus, network layer và kiến trúc dữ liệu cho chuỗi của team.
                                                                           Lúc mới bắt đầu, mình từng choáng vì một block header có… 10 trường, nhưng giờ mình có thể phân tích block như một cuốn sách mở.
                                                                           Mình đặc biệt quan tâm đến cơ chế đồng thuận – từ PoW, PoS đến những thuật toán mới như HotStuff.
                                                                           Trong nhóm, mọi người hay gọi mình là “anh hacker hiền” vì lúc nào cũng thích debug mà… không phá gì cả.
                                                                           Khi không code, mình hay chơi cờ vua và đọc tài liệu nghiên cứu về các blockchain lớn như Ethereum, Avalanche.
                                                                           Mình từng dành cả đêm chỉ để tối ưu một vòng lặp xử lý giao dịch – vì đơn giản là “thích”.
                                                                           Blockchain với mình không chỉ là công nghệ, mà còn là sự công bằng và minh bạch.
                                                                           Mình rất mong dự án lần này sẽ là nền móng cho một thứ gì đó lớn hơn trong tương lai.
                                                                           Let’s build something meaningful – từ những khối đầu tiên!
                                                                      </p>
                                                                 </div>

                                                                 {/* Education */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Học vấn</h2>
                                                                      <p className="text-gray-700 text-base leading-relaxed text-justify font-medium">Đại học</p>
                                                                 </div>
                                                            </div>
                                                       </DialogPanel>
                                                  </div>
                                             </div>
                                        </Dialog>
                                   </div>

                                   {/* Team Member 5 */}
                                   <div className='w-full md:w-[220px] group transition-all duration-500 hover:scale-105 cursor-pointer'>
                                        <div onClick={() => setOpen5(true)} className='relative p-6 rounded-2xl border border-[#00E0FF] bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] h-full'>
                                             <div className='w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.15)] to-[rgba(0,224,255,0.15)] border-2 border-[#00E0FF]/40 group-hover:border-[#00E0FF]/70 transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/80 flex items-center justify-center text-2xl font-bold text-[#00E0FF]/80'>
                                                       <Image src='/images/_chuongtoan.jpg' alt='Chương Toàn' width={110} height={110} className='mt-2 rounded-full object-cover' />
                                                  </div>
                                             </div>
                                             <h3 className='text-lg font-bold text-center mb-2 text-[#017479] transition-colors duration-300'>Chương Toàn</h3>
                                             <p className='text-[#00E0FF]/80 text-center text-sm text-[#017479]'>Backend Dev</p>
                                             <div className='h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00FF7B]/50 to-[#00E0FF]/50 mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>

                                        {/* Modal Dialog */}
                                        <Dialog open={open5} onClose={() => setOpen5(false)} className="relative z-50">
                                             <DialogBackdrop transition className="fixed inset-0 bg-black/50 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in" />

                                             <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                                                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                                                       <DialogPanel transition className="relative transform overflow-hidden rounded-2xl bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in w-[700px] data-[closed]:scale-95">
                                                            {/* Header Section */}
                                                            <div className="bg-gradient-to-r from-cyan-100 to-cyan-50 p-6 relative">
                                                                 <div className="flex items-start gap-4">
                                                                      <div className="w-20 h-20 bg-gray-200 rounded-full border-4 border-cyan-200 flex-shrink-0 overflow-hidden">
                                                                           <Image
                                                                                src="/images/_chuongtoan.jpg"
                                                                                alt="Minh Duy"
                                                                                width={110}
                                                                                height={110}
                                                                                className="rounded-full object-cover"
                                                                           />
                                                                      </div>
                                                                      <div className="flex-1 pt-2">
                                                                           <h1 className="text-2xl font-bold text-gray-900 mb-1">Dương Phương Chương Toàn</h1>
                                                                           <p className="text-cyan-500 font-semibold text-lg mb-2">Backend Developer</p>
                                                                      </div>
                                                                 </div>
                                                            </div>

                                                            {/* Content Section */}
                                                            <div className="p-6 space-y-6">
                                                                 {/* Introduction */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Giới thiệu</h2>
                                                                      <p className="text-gray-700 text-base leading-relaxed text-justify font-medium">
                                                                           Chào mọi người! Mình là Chương Toàn, backend developer của team và là người chống lưng âm thầm cho blockchain hoạt động trơn tru.
                                                                           Mình phụ trách xây dựng API, quản lý cơ sở dữ liệu, đồng thời kiêm luôn việc deploy server và giám sát hệ thống.
                                                                           Trong nhóm, mọi người thường gọi mình là “ông chú của hệ thống” – vì mình lúc nào cũng phải chăm backend “ăn ngủ đủ”.
                                                                           Mình sử dụng Node.js, MongoDB và Docker để đảm bảo backend không chỉ chạy được mà còn ổn định lâu dài.
                                                                           Ngoài công việc, mình thích sửa máy tính và vọc vạch các công cụ tự động hóa.
                                                                           Mình xem backend là “xương sống” của toàn bộ hệ thống – không thấy nhưng luôn phải vững.
                                                                           Dù không trực tiếp viết smart contract, nhưng mình luôn đồng hành cùng team để dữ liệu luân chuyển mượt mà.
                                                                           Mình thích làm việc trong môi trường công nghệ vì luôn có thứ mới để học, để vượt giới hạn bản thân.
                                                                           Hy vọng mọi người sẽ thấy rõ “bàn tay vô hình” của backend trong sản phẩm lần này nhé!
                                                                           Mình từng tham gia một số hackathon về Web3 và mong muốn ứng dụng công nghệ vào thực tiễn xã hội Việt Nam.
                                                                      </p>
                                                                 </div>

                                                                 {/* Education */}
                                                                 <div>
                                                                      <h2 className="text-lg font-semibold text-gray-900 mb-3">Học vấn</h2>
                                                                      <p className="text-gray-700 text-base leading-relaxed text-justify font-medium">Đại học</p>
                                                                 </div>
                                                            </div>
                                                       </DialogPanel>
                                                  </div>
                                             </div>
                                        </Dialog>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <section id='introduce' className='relative w-full overflow-hidden'>

                    <div className='container mx-auto px-4'>
                         <IntroVideoSection />
                    </div>
               </section>


               <section id='services' className='relative w-full overflow-hidden'>
                    <div data-aos='zoom-out-up' className='container mx-auto px-4'>
                         <div className='text-center mb-12'>
                              <h2 className='text-[28px] md:text-[32px] lg:text-[36px] font-bold text-center text-[#00D768]'>LĨNH VỰC CHUYÊN MÔN</h2>
                              <div className='h-[2px] w-full max-w-[800px] mx-auto bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mt-2'></div>
                         </div>

                         <div className='max-w-[1280px] mx-auto'>
                              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center'>
                                   {/* Field 1 */}
                                   <div className='lg:w-[361px] lg:h-[228px] rounded-2xl border border-[#00E0FF]/30 bg-gradient-to-b from-[#00E0FF]/10 to-transparent p-6 hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-all duration-300 group'>
                                        <div className='mx-auto w-12 h-12 mb-4'>
                                             <Image src='/images/layer1.png' alt='Blockchain' width={48} height={48} className='text-[#00E0FF]' />
                                        </div>
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px] text-justify'>Blockchain Layer 1 &: Nghiên Cứu và Triển Khai Chuỗi Khối Tốc Độ Cao, Bảo Mật, Hỗ trợ hợp đồng thông minh</p>
                                   </div>

                                   {/* Field 2 */}
                                   <div className='lg:w-[361px] lg:h-[228px] rounded-2xl border border-[#00E0FF]/30 bg-gradient-to-b from-[#00E0FF]/10 to-transparent p-6 hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-all duration-300 group'>
                                        <div className='mx-auto w-12 h-12 mb-4'>
                                             <Image src='/images/dex.png' alt='DEX' width={48} height={48} className='text-[#00E0FF]' />
                                        </div>
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px] text-justify'>Sàn Giao Dịch Phi Tập Trung (DEX): Phát Triển Nền Tảng Giao Dịch Minh Bạch, An Toàn Và Tốc Độ Cao</p>
                                   </div>

                                   {/* Field 3 */}
                                   <div className='lg:w-[361px] lg:h-[228px] rounded-2xl border border-[#00E0FF]/30 bg-gradient-to-b from-[#00E0FF]/10 to-transparent p-6 hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-all duration-300 group'>
                                        <div className='mx-auto w-12 h-12 mb-4'>
                                             <Image src='/images/cex.png' alt='DeFi' width={48} height={48} className='text-[#00E0FF]' />
                                        </div>
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[22px]'>Sàn Giao Dịch Tập Trung (CEX): Thiết Kế Và Vận Hành Hệ Thống CEX Với Hiệu Suất Cao, Bảo Mật Đa Tầng, Hỗ Trợ KYC/AML, Quản Lý Tài Sản Và Thanh Khoản, Tích Hợp Đa Chuỗi Và Trải Nghiệm Người Dùng Tối Ưu.</p>
                                   </div>

                                   {/* Field 4 */}
                                   <div className='lg:w-[361px] lg:h-[228px] rounded-2xl border border-[#00E0FF]/30 bg-gradient-to-b from-[#00E0FF]/10 to-transparent p-6 hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-all duration-300 group'>
                                        <div className='mx-auto w-12 h-12 mb-4'>
                                             <Image src='/images/al.png' alt='AI' width={48} height={48} className='text-[#00E0FF]' />
                                        </div>
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px] text-justify'>AI Ứng Dụng: Phát Triển Giải Pháp AI Phân Tích Dữ Liệu, Xử Lý Ngôn Ngữ Tự Nhiên Và Tự Động Hóa Quy Trình.</p>
                                   </div>

                                   {/* Field 5 */}
                                   <div className='lg:w-[361px] lg:h-[228px] rounded-2xl border border-[#00E0FF]/30 bg-gradient-to-b from-[#00E0FF]/10 to-transparent p-6 hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-all duration-300 group'>
                                        <div className='mx-auto w-12 h-12 mb-4'>
                                             <Image src='/images/IoT.png' alt='IoT' width={48} height={48} className='text-[#00E0FF]' />
                                        </div>
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px] text-justify'>IoT & Tự Động Hóa: Kết Nối Và Xử Lý Dữ Liệu Từ Thiết Bị Đầu Cuối Qua Mạng Blockchain và AI.</p>
                                   </div>

                                   {/* Field 6 */}
                                   <div className='lg:w-[361px] lg:h-[228px] rounded-2xl border border-[#00E0FF]/30 bg-gradient-to-b from-[#00E0FF]/10 to-transparent p-6 hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-all duration-300 group'>
                                        <div className='mx-auto w-12 h-12 mb-4'>
                                             <Image src='/images/DeFin.png' alt='DePIN' width={48} height={48} className='text-[#00E0FF]' />
                                        </div>
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px] text-justify'>Hạ Tầng Phi Tập Trung DePIN: Xây Dựng Hệ Thống Hạ Tầng Mạng Phi Tập Trung Phục Vụ Cho Truyền Dữ Liệu, Định Vị Và Đo Lường Thông Minh.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               <footer id="contact" className="mt-10 bg-gradient-to-br from-[#004d4d] via-[#006666] to-[#00cccc] py-16 text-white">
                    <div data-aos="fade-up" data-aos-duration="1000" className="container mx-auto px-4">
                         {/* Main Content */}
                         <div className="flex flex-col gap-10 md:flex-row md:justify-between lg:justify-around">
                              {/* Contact Form */}
                              <div>
                                   <h2 className="text-2xl font-bold mb-8 text-white">Liên hệ với chúng tôi</h2>
                                   <div className="space-y-6">
                                        <div>
                                             <label className="block text-sm font-medium mb-2">
                                                  Họ và tên <span className="text-red-400">*</span>
                                             </label>
                                             <input
                                                  name="name"
                                                  type="text"
                                                  placeholder="Nhập họ và tên"
                                                  value={formData.name}
                                                  onChange={handleChange}
                                                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                                             />
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                             <div>
                                                  <label className="block text-sm font-medium mb-2">
                                                       Email <span className="text-red-400">*</span>
                                                  </label>
                                                  <input
                                                       name="email"
                                                       type="email"
                                                       placeholder="Nhập email"
                                                       value={formData.email}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                                                  />
                                             </div>
                                             <div>
                                                  <label className="block text-sm font-medium mb-2">
                                                       Số điện thoại <span className="text-red-400">*</span>
                                                  </label>
                                                  <input
                                                       name="phone"
                                                       type="tel"
                                                       placeholder="Nhập số điện thoại"
                                                       value={formData.phone}
                                                       onChange={handleChange}
                                                       className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent"
                                                  />
                                             </div>
                                        </div>

                                        <div>
                                             <label className="block text-sm font-medium mb-2">
                                                  Câu hỏi <span className="text-red-400">*</span>
                                             </label>
                                             <textarea
                                                  name="question"
                                                  rows={4}
                                                  placeholder="Nhập câu hỏi"
                                                  value={formData.question}
                                                  onChange={handleChange}
                                                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/30 focus:border-transparent resize-none"
                                             />
                                        </div>

                                        <button
                                             onClick={handleSubmit}
                                             className="inline-flex items-center gap-2 bg-[#00cccc] hover:bg-[#00b3b3] text-white font-medium px-8 py-3 rounded-lg transition-colors duration-200"
                                        >
                                             Gửi
                                             <Send className="w-4 h-4" />
                                        </button>
                                   </div>
                              </div>

                              {/* Contact Information */}
                              <div>
                                   <h3 className="text-2xl font-bold mb-8 text-white">Thông tin liên hệ</h3>

                                   <div className="space-y-3 mb-5">
                                        <div className="flex items-center gap-2">
                                             <div className="flex items-center">
                                                  <Phone className="w-4 h-4" />
                                             </div>
                                             <span className="text-sm">+84 000 000 000</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                             <div className="flex items-center">
                                                  <Mail className="w-4 h-4" />
                                             </div>
                                             <span className="text-sm">contact@egteam.com</span>
                                        </div>

                                        <div className="flex items-center gap-2">
                                             <div className="flex items-center">
                                                  <MapPin className="w-4 h-4" />
                                             </div>
                                             <span className="text-sm">TP.HCM</span>
                                        </div>
                                   </div>
                                   <div className="pt-5 border-t border-white/20"></div>

                                   {/* Social Media */}
                                   <div className="flex gap-4">
                                        <a
                                             href="https://www.youtube.com/@EG-TEAM"
                                             target="_blank"
                                             className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00cccc]/20 transition flex items-center justify-center text-white group"
                                             rel="noreferrer"
                                        >
                                             <svg
                                                  className="w-4 h-4 group-hover:text-[#00cccc] transition-colors"
                                                  fill="currentColor"
                                                  viewBox="0 0 576 512"
                                                  xmlns="http://www.w3.org/2000/svg"
                                             >
                                                  <path d="M549.7 124.1c-6.3-23.7-24.9-42.4-48.6-48.6C456.5 64 288 64 288 64s-168.5 0-213.1 11.5c-23.7 6.3-42.4 24.9-48.6 48.6C16.8 168.5 16.8 256 16.8 256s0 87.5 9.5 131.9c6.3 23.7 24.9 42.4 48.6 48.6C119.5 448 288 448 288 448s168.5 0 213.1-11.5c23.7-6.3 42.4-24.9 48.6-48.6 9.5-44.4 9.5-131.9 9.5-131.9s0-87.5-9.5-131.9zM232 336V176l142 80-142 80z" />
                                             </svg>
                                        </a>
                                   </div>
                              </div>
                         </div>

                         {/* Footer Bottom */}
                         <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm">
                              © {new Date().getFullYear()} <span className="text-[#00cccc] font-medium">EG TEAM</span>. Chúng tôi là những kỹ sư công nghệ đam mê Blockchain, Web3 và DePIN, luôn nỗ lực tiếp cận những giải pháp tiên tiến nhằm tạo ra giá trị thực tiễn cho doanh nghiệp.
                         </div>
                    </div>
               </footer>

          </main>
     );
}
