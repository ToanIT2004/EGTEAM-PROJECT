"use client";
import Image from 'next/image';
import './globals.css';
import Navbar from '../components/Navbar';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import "swiper/css";
import "swiper/css/effect-cards";
import ReviewSlider from "../components/Review/ReviewSliderVideo";
import IntroVideoSection from '@/components/Review/IntroVideoSection ';
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'



export default function Home() {
     useEffect(() => {
          oncanplay
          AOS.init({
               duration: 1000,
               easing: 'ease-out',
               once: true
          });
     }, []);

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
                                   <div className='flex flex-col lg:flex-row items-center justify-between gap-8 w-full'>
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
                                        <div className='relative p-6 rounded-2xl border border-[#00E0FF] bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] h-full'>
                                        {/* A */}
                                             <div className='w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.15)] to-[rgba(0,224,255,0.15)] border-2 border-[#00E0FF]/40 group-hover:border-[#00E0FF]/70 transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/80 flex items-center justify-center text-2xl font-bold text-[#00E0FF]/80'>
                                                       <Image src='/images/kieuanh.jpg' alt='Kiều Anh' width={110} height={110} className='mt-[70px] rounded-full object-cover' />
                                                  </div>
                                             </div>
                                             <h3 className='text-lg font-bold text-center mb-2 text-[#017479] transition-colors duration-300'>Kiều Anh</h3>
                                             <p className='text-[#00E0FF]/80 text-center text-sm text-[#017479]'>Blockchain Dev</p>
                                             <div className='h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00FF7B]/50 to-[#00E0FF]/50 mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>
                                   </div>

                                   {/* Team Member 2 */}
                                   <div className='w-full md:w-[220px] group transition-all duration-500 hover:scale-105 cursor-pointer'>
                                        <div className='relative p-6 rounded-2xl border border-[#00E0FF] bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] h-full'>
                                             <div className='w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.15)] to-[rgba(0,224,255,0.15)] border-2 border-[#00E0FF]/40 group-hover:border-[#00E0FF]/70 transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/80 flex items-center justify-center text-2xl font-bold text-[#00E0FF]/80'>
                                                       <Image src='/images/minhduy.jpg' alt='Chương Toàn' width={110} height={110} className='mt-[10px] rounded-full object-cover' />
                                                  </div>
                                             </div>
                                             <h3 className='text-lg font-bold text-center text-[#017479] mb-2 transition-colors duration-300'>Minh Duy</h3>
                                             <p className='text-center text-sm text-[#017479]'>UI/UX Designer</p>
                                             <div className='h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00FF7B]/50 to-[#00E0FF]/50 mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>
                                   </div>

                                   {/* Team Member 3 - Center (Featured) */}
                                   <div className='w-full md:w-[280px] z-10 group transition-all duration-500 hover:scale-105 cursor-pointer'>
                                        <div className='relative p-7 rounded-2xl border-2 border-[#00E0FF] bg-gradient-to-b from-white/5 to-transparent backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_25px_rgba(0,224,255,0.5)] h-full'>
                                             <div className='absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#00FF7B] to-[#00D768] text-black text-xs font-bold py-1.5 px-4 rounded-full shadow-lg'>Đội trưởng</div>
                                             <div className='w-36 h-36 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.3)] to-[rgba(0,224,255,0.3)] border-2 border-[#00E0FF] group-hover:shadow-[0_0_15px_rgba(0,224,255,0.5)] transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/70 flex items-center justify-center text-3xl font-bold text-[#00E0FF]'>
                                                       <Image src='/images/avt-phat.jpg' alt='Hỉn Phát' width={160} height={160} className='mt-10 rounded-full' />
                                                  </div>
                                             </div>
                                             <h3 className='text-xl font-bold text-center mb-2 text-[#017479] transition-colors duration-300'>Lìu Hìn Phát</h3>
                                             <p className='text-[#00E0FF] text-center text-[#017479]'>Blockchain Architect</p>
                                             <div className='h-0.5 w-1/3 group-hover:w-full bg-gradient-to-r from-[#00FF7B] to-[#00E0FF] mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>
                                   </div>

                                   {/* Team Member 4 */}
                                   <div className='w-full md:w-[220px] group transition-all duration-500 hover:scale-105 cursor-pointer'>
                                        <div className='relative p-6 rounded-2xl border border-[#00E0FF] bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] h-full'>
                                             <div className='w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.15)] to-[rgba(0,224,255,0.15)] border-2 border-[#00E0FF]/40 group-hover:border-[#00E0FF]/70 transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/80 flex items-center justify-center text-2xl font-bold text-[#00E0FF]/80'>
                                                       <Image src='/images/haidang.jpg' alt='Chương Toàn' width={110} height={110} className='mt-[60px] rounded-full' />
                                                  </div>
                                             </div>
                                             <h3 className='text-lg font-bold text-center mb-2 text-[#017479] transition-colors duration-300'>Hải Đăng</h3>
                                             <p className='text-[#00E0FF]/80 text-center text-sm text-[#017479]'>Smart Contract Dev</p>
                                             <div className='h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00FF7B]/50 to-[#00E0FF]/50 mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>
                                   </div>

                                   {/* Team Member 5 */}
                                   <div className='w-full md:w-[220px] group transition-all duration-500 hover:scale-105 cursor-pointer'>
                                        <div className='relative p-6 rounded-2xl border border-[#00E0FF] bg-white/5 backdrop-blur-sm transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(0,224,255,0.4)] h-full'>
                                             <div className='w-28 h-28 mx-auto rounded-full overflow-hidden mb-6 bg-gradient-to-b from-[rgba(0,255,123,0.15)] to-[rgba(0,224,255,0.15)] border-2 border-[#00E0FF]/40 group-hover:border-[#00E0FF]/70 transition-all duration-300'>
                                                  <div className='w-full h-full bg-dark-light/80 flex items-center justify-center text-2xl font-bold text-[#00E0FF]/80'>
                                                       <Image src='/images/chuongtoan.png' alt='Chương Toàn' width={110} height={110} className='mt-4 rounded-full object-cover' />
                                                  </div>
                                             </div>
                                             <h3 className='text-lg font-bold text-center mb-2 text-[#017479] transition-colors duration-300'>Chương Toàn</h3>
                                             <p className='text-[#00E0FF]/80 text-center text-sm text-[#017479]'>Backend Dev</p>
                                             <div className='h-0.5 w-0 group-hover:w-full bg-gradient-to-r from-[#00FF7B]/50 to-[#00E0FF]/50 mt-4 transition-all duration-500 mx-auto'></div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Video Introduction Section */}
               {/* <section className='relative w-full   lg:py-20 '>
                    <div data-aos="zoom-in" className='text-center mb-10'>
                         <ReviewSlider />
                    </div>
               </section> */}
                <section className='relative w-full py-20 overflow-hidden'>
                    
                    <div className='container mx-auto px-4'>
                         <IntroVideoSection />
                         {/* <div className='text-center mb-12'>
                              <p className='text-[#00E0FF] text-sm font-medium mb-2'>//VIDEO//</p>
                              <h2 className='text-[28px] md:text-[32px] lg:text-[36px] font-bold text-center text-[#00D768]'>VIDEO GIỚI THIỆU</h2>
                              <div className='h-[2px] w-full max-w-[800px] mx-auto bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mt-2'></div>
                         </div> */}

                         {/* <div className='max-w-[1285px] max-h-[567px] mx-auto relative'>
                              <div className='rounded-3xl border-2 border-[#00E0FF] overflow-hidden aspect-video relative group hover:shadow-[0_0_25px_rgba(0,224,255,0.4)] transition-all duration-500'>
                                   <div className='absolute inset-0 bg-gradient-to-b from-[rgba(0,255,123,0.1)] to-[rgba(0,224,255,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none'></div>
                                   <iframe src='https://www.youtube.com/embed/lgvDx7j0Sw4' title='EG TEAM Video' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' allowFullScreen className='absolute inset-0 w-full h-full z-0'></iframe>
                              </div>
                         </div> */}
                    </div>
               </section>


               <section id='services' className='relative w-full lg:py-20 overflow-hidden'>
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
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px]'>Blockchain Layer 1 &: Nghiên Cứu và Triển Khai Chuỗi Khối Tốc Độ Cao, Bảo Mật, Hỗ trợ hợp đồng thông minh</p>
                                   </div>

                                   {/* Field 2 */}
                                   <div className='lg:w-[361px] lg:h-[228px] rounded-2xl border border-[#00E0FF]/30 bg-gradient-to-b from-[#00E0FF]/10 to-transparent p-6 hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-all duration-300 group'>
                                        <div className='mx-auto w-12 h-12 mb-4'>
                                             <Image src='/images/dex.png' alt='DEX' width={48} height={48} className='text-[#00E0FF]' />
                                        </div>
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px]'>Sàn Giao Dịch Phi Tập Trung (DEX): Phát Triển Nền Tảng Giao Dịch Minh Bạch, An Toàn Và Tốc Độ Cao</p>
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
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px]'>AI Ứng Dụng: Phát Triển Giải Pháp AI Phân Tích Dữ Liệu, Xử Lý Ngôn Ngữ Tự Nhiên Và Tự Động Hóa Quy Trình.</p>
                                   </div>

                                   {/* Field 5 */}
                                   <div className='lg:w-[361px] lg:h-[228px] rounded-2xl border border-[#00E0FF]/30 bg-gradient-to-b from-[#00E0FF]/10 to-transparent p-6 hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-all duration-300 group'>
                                        <div className='mx-auto w-12 h-12 mb-4'>
                                             <Image src='/images/IoT.png' alt='IoT' width={48} height={48} className='text-[#00E0FF]' />
                                        </div>
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px]'>IoT & Tự Động Hóa: Kết Nối Và Xử Lý Dữ Liệu Từ Thiết Bị Đầu Cuối Qua Mạng Blockchain và AI.</p>
                                   </div>

                                   {/* Field 6 */}
                                   <div className='lg:w-[361px] lg:h-[228px] rounded-2xl border border-[#00E0FF]/30 bg-gradient-to-b from-[#00E0FF]/10 to-transparent p-6 hover:shadow-[0_0_15px_rgba(0,224,255,0.2)] transition-all duration-300 group'>
                                        <div className='mx-auto w-12 h-12 mb-4'>
                                             <Image src='/images/DeFin.png' alt='DePIN' width={48} height={48} className='text-[#00E0FF]' />
                                        </div>
                                        <p className='text-[#8198A4] pt-2 text-sm leading-[30px]'>Hạ tầng phi tập trung DePIN: Xây Dựng Hệ Thống Hạ Tầng Mạng Phi Tập Trung Phục Vụ Cho Truyền Dữ Liệu, Định Vị Và Đo Lường Thông Minh.</p>
                                   </div>
                              </div>
                         </div>
                    </div>
               </section>

               {/* Featured Projects Section */}
               <section id='#projects' className='relative w-full py-20 overflow-hidden'>
                    <div data-aos='zoom-in' className='container mx-auto px-4'>
                         <div className='text-center mb-12'>
                              <h2 className='text-[28px] md:text-[32px] lg:text-[36px] font-bold text-center text-[#00D768]'>DỰ ÁN TIÊU BIỂU</h2>
                              <div className='h-[2px] w-full max-w-[800px] mx-auto bg-gradient-to-r from-transparent via-[#00E0FF] to-transparent mt-2'></div>
                         </div>

                         <div className='max-w-[1280px] mx-auto'>
                              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center items-center'></div>
                         </div>
                    </div>
               </section>

               <footer id='contact' className='bg-gradient-to-br from-[#004d4d] via-[#006666] to-[#00cccc] py-16 text-white'>
                    <div data-aos='fade-up' data-aos-duration='1000' className='max-w-7xl mx-auto px-6'>
                         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12'>
                              <div>
                                   <div className='relative w-[160px] h-[50px] mb-6'>
                                        <Image src='/images/logo.svg' alt='Logo' fill className='object-contain' />
                                   </div>
                                   <p className='text-sm leading-relaxed'>EG TEAM - Đội ngũ chuyên gia công nghệ Blockchain, Web3 và DePIN hàng đầu Việt Nam. Chúng tôi cung cấp các giải pháp công nghệ tiên tiến và đột phá.</p>
                              </div>

                              {/* Liên hệ */}
                              <div>
                                   <h3 className='text-lg font-bold mb-4 text-white relative inline-block'>
                                        Liên hệ
                                        <span className='absolute -bottom-2 left-0 w-12 h-0.5 bg-primary-light'></span>
                                   </h3>
                                   <ul className='space-y-4 text-sm'>
                                        <li className='flex items-center gap-3'>
                                             <span className='text-secondary-light'>📧</span>
                                             contact@egteam.com
                                        </li>
                                        <li className='flex items-center gap-3'>
                                             <span className='text-secondary-light'>📱</span>
                                             +84 123 456 789
                                        </li>
                                        <li className='flex items-center gap-3'>
                                             <span className='text-secondary-light'>📍</span>
                                             Hà Nội, Việt Nam
                                        </li>
                                   </ul>
                              </div>

                              {/* Theo dõi */}
                              <div>
                                   <h3 className='text-lg font-bold mb-4 text-white relative inline-block'>
                                        Theo dõi
                                        <span className='absolute -bottom-2 left-0 w-12 h-0.5 bg-secondary-light'></span>
                                   </h3>
                                   <div className='flex gap-4 mb-6'>
                                        <a href='#' className='w-10 h-10 rounded-full bg-white/10 hover:bg-primary-light/20 transition flex items-center justify-center text-white'>
                                             𝕏
                                        </a>
                                        <a href='#' className='w-10 h-10 rounded-full bg-white/10 hover:bg-primary-light/20 transition flex items-center justify-center text-white'>
                                             ƒ
                                        </a>
                                        <a href='#' className='w-10 h-10 rounded-full bg-white/10 hover:bg-primary-light/20 transition flex items-center justify-center text-white'>
                                             in
                                        </a>
                                   </div>
                              </div>
                         </div>
                         {/* Footer Bottom */}
                         <div className=' mt-5 pt-6 text-center text-sm'>
                              <div className='mb-10 text-white h-[1.5px] w-full bg-gradient-to-r from-primary-light to-secondary-light rounded-full'></div>© {new Date().getFullYear()} <span className='text-gradient font-medium'>EG TEAM</span>. Tất cả các quyền được bảo lưu.
                         </div>
                    </div>
               </footer>
          </main>
     );
}
