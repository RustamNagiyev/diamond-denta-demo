import React, { useState } from 'react';
import {
  CLINIC_PHONE_DISPLAY,
  CLINIC_PHONE_RAW,
  CLINIC_WHATSAPP_LINK,
  CLINIC_INSTAGRAM_HANDLE,
  CLINIC_ADDRESS,
  CLINIC_HOURS,
  CLINIC_MAP_COORDINATES,
  CLINIC_MAPS_LINK,
} from '../data/clinicData';
import {
  Phone,
  Clock,
  MapPin,
  Instagram,
  MessageCircle,
  ShieldCheck,
  Navigation,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
} from 'lucide-react';

export const ContactView: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: 'Vinir və Estetik Bərpa',
    date: '',
    timeSlot: '11:00 - 13:00',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="w-full text-[#E5E1E4]">
      
      {/* 1. HERO SECTION */}
      <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 bg-[#0A0A0C] text-center border-b border-[#C9A96E]/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#C9A96E]/40 bg-[#141418] text-[11px] sm:text-xs uppercase tracking-[0.22em] text-[#C9A96E]">
            <span>•</span>
            <span>ONLİNE REZERV</span>
            <span>•</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl text-[#F5F1EA] font-normal tracking-[-0.01em]">
            Randevunuzu indi planlaşdırın
          </h1>

          <p className="text-sm sm:text-base text-[#A8A39A] font-light max-w-lg mx-auto">
            Formu doldurun, sizinlə tezliklə əlaqə saxlayaq.
          </p>

        </div>
      </section>


      {/* 2. FORM & INFO TWO-COLUMN SECTION */}
      <section className="py-20 sm:py-28 bg-[#0E0E10]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            
            {/* Left Column: Form Card */}
            <div className="lg:col-span-7 bg-[#141418] border border-[#C9A96E]/20 rounded-2xl p-6 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
              
              {!submitted ? (
                <div>
                  <div className="space-y-1 mb-8">
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium">
                      Eksklüziv Qəbul
                    </div>
                    <h2 className="font-serif text-2xl sm:text-4xl text-[#F5F1EA] font-normal">
                      Qəbula yazılın
                    </h2>
                    <p className="text-xs sm:text-sm text-[#A8A39A]">
                      Zəhmət olmasa məlumatlarınızı qeyd edin
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-2 font-medium">
                        Ad və soyad <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Adınız və soyadınız"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] placeholder-[#6A6763] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-2 font-medium">
                        Telefon nömrəsi <span className="text-[#C9A96E]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+994 50 000 00 00"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] placeholder-[#6A6763] focus:outline-none transition-colors"
                      />
                    </div>

                    {/* Service Selection */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-2 font-medium">
                        Xidmət
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] focus:outline-none transition-colors"
                      >
                        <option value="Vinir və Estetik Bərpa">✦ Vinir və Estetik Bərpa</option>
                        <option value="Dental İmplantasiya">✦ Dental İmplantasiya</option>
                        <option value="Ortodontik Müalicə və Qapaqlar">✦ Ortodontik Müalicə və Qapaqlar</option>
                        <option value="Cərrahi Stomatologiya">✦ Cərrahi Stomatologiya</option>
                        <option value="Rəqəmsal Gülüş Konsultasiyası">✦ Rəqəmsal Gülüş Konsultasiyası</option>
                      </select>
                    </div>

                    {/* Date and Time */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-2 font-medium">
                          Uyğun tarix
                        </label>
                        <input
                          type="date"
                          value={formData.date}
                          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] focus:outline-none transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-2 font-medium">
                          Uyğun vaxt
                        </label>
                        <select
                          value={formData.timeSlot}
                          onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] focus:outline-none transition-colors"
                        >
                          <option value="11:00 - 13:00">11:00 - 13:00</option>
                          <option value="13:00 - 15:00">13:00 - 15:00</option>
                          <option value="15:00 - 17:00">15:00 - 17:00</option>
                          <option value="17:00 - 19:00">17:00 - 19:00</option>
                        </select>
                      </div>
                    </div>

                    {/* Optional Note */}
                    <div>
                      <label className="block text-xs uppercase tracking-wider text-[#A8A39A] mb-2 font-medium">
                        Qeyd (könüllü)
                      </label>
                      <textarea
                        rows={3}
                        placeholder="Əlavə qeydləriniz və ya istəkləriniz..."
                        value={formData.notes}
                        onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0A0A0C] border border-white/15 focus:border-[#C9A96E] rounded-lg text-sm text-[#F5F1EA] placeholder-[#6A6763] focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    {/* Confidentiality Disclaimer */}
                    <p className="text-[11px] text-[#7A7771] leading-relaxed">
                      Məlumatlarınız tam məxfi saxlanılır və yalnız klinika koordinatorunun sizinlə əlaqəsi üçün istifadə olunur.
                    </p>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-[#C9A96E] hover:bg-[#E6C487] text-[#0A0A0C] font-medium text-sm rounded-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(201,169,110,0.3)] cursor-pointer"
                    >
                      <span>{isSubmitting ? 'Göndərilir...' : 'Rezerv göndər'}</span>
                      {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                    </button>

                  </form>
                </div>
              ) : (
                <div className="py-12 text-center space-y-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-[#C9A96E]/20 border border-[#C9A96E] flex items-center justify-center text-[#C9A96E]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-3xl text-[#F5F1EA]">
                      Rezerviniz Qeydə Alındı
                    </h3>
                    <p className="text-sm text-[#A8A39A] max-w-md mx-auto">
                      Hörmətli <span className="text-[#C9A96E]">{formData.fullName}</span>, müraciətiniz qəbul olundu. Klinika menecerimiz tezliklə sizinlə əlaqə saxlayacaqdır.
                    </p>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={CLINIC_WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3 bg-[#25D366]/20 border border-[#25D366]/40 hover:bg-[#25D366]/30 text-[#25D366] text-xs font-medium rounded-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp ilə təsdiqlə</span>
                    </a>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="px-6 py-3 bg-[#C9A96E] text-[#0A0A0C] text-xs font-medium rounded-lg"
                    >
                      Yeni Rezerv
                    </button>
                  </div>
                </div>
              )}

            </div>

            {/* Right Column: Direct Info Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-[#141418] border border-[#C9A96E]/20 rounded-2xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.8)] space-y-7">
                
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div>
                    <div className="text-[11px] uppercase tracking-[0.2em] text-[#C9A96E] font-medium">
                      Məlumat Mərkəzi
                    </div>
                    <h3 className="font-serif text-2xl text-[#F5F1EA] font-normal">
                      Birbaşa Əlaqə
                    </h3>
                  </div>
                  <div className="w-8 h-8 rounded-full border border-white/15 flex items-center justify-center text-[#A8A39A]">
                    <HelpCircle className="w-4 h-4" />
                  </div>
                </div>

                {/* Info List */}
                <div className="space-y-6">
                  
                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C1B20] border border-[#C9A96E]/30 flex items-center justify-center shrink-0 text-[#C9A96E]">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#A8A39A] mb-0.5">
                        Telefon
                      </div>
                      <a
                        href={`tel:${CLINIC_PHONE_RAW}`}
                        className="font-serif text-2xl text-[#F5F1EA] hover:text-[#C9A96E] transition-colors block leading-tight"
                      >
                        {CLINIC_PHONE_DISPLAY}
                      </a>
                      <div className="text-xs text-[#8A857D] mt-0.5">
                        Zənglər və VIP konsultasiya
                      </div>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C1B20] border border-[#C9A96E]/30 flex items-center justify-center shrink-0 text-[#C9A96E]">
                      <Clock className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#A8A39A] mb-0.5">
                        İş saatları
                      </div>
                      <div className="font-serif text-xl text-[#F5F1EA] leading-tight">
                        {CLINIC_HOURS}
                      </div>
                      <div className="text-xs text-[#8A857D] mt-0.5">
                        Qəbul yalnız öncədən yazılışla
                      </div>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C1B20] border border-[#C9A96E]/30 flex items-center justify-center shrink-0 text-[#C9A96E]">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#A8A39A] mb-0.5">
                        Ünvan
                      </div>
                      <div className="font-serif text-xl text-[#F5F1EA] leading-tight">
                        {CLINIC_ADDRESS}
                      </div>
                      <div className="text-xs text-[#8A857D] mt-0.5">
                        Premium estetik stomatologiya rezidensiyası
                      </div>
                    </div>
                  </div>

                  {/* Instagram */}
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-[#1C1B20] border border-[#C9A96E]/30 flex items-center justify-center shrink-0 text-[#C9A96E]">
                      <Instagram className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-wider text-[#A8A39A] mb-0.5">
                        Instagram
                      </div>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noreferrer"
                        className="font-mono text-sm text-[#F5F1EA] hover:text-[#C9A96E] transition-colors block leading-tight"
                      >
                        {CLINIC_INSTAGRAM_HANDLE}
                      </a>
                      <div className="text-xs text-[#8A857D] mt-0.5">
                        Nəticələr və canlı klinik işlər
                      </div>
                    </div>
                  </div>

                </div>

                {/* WhatsApp Action Button */}
                <div className="pt-2">
                  <a
                    href={CLINIC_WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 bg-[#1C1B20] hover:bg-[#25242A] border border-[#C9A96E]/30 hover:border-[#C9A96E] text-[#F5F1EA] text-xs sm:text-sm font-medium tracking-wide rounded-lg flex items-center justify-center gap-2.5 transition-all"
                  >
                    <MessageCircle className="w-4 h-4 text-[#C9A96E]" />
                    <span>WhatsApp ilə yaz ({CLINIC_PHONE_DISPLAY})</span>
                  </a>
                </div>

                {/* Confidentiality Pill */}
                <div className="p-3 bg-[#0A0A0C] border border-[#C9A96E]/15 rounded-lg flex items-center gap-2.5 text-xs text-[#A8A39A]">
                  <ShieldCheck className="w-4 h-4 text-[#C9A96E] shrink-0" />
                  <span>Fərdi qəbul və tam konfidensiallıq zəmanəti</span>
                </div>

              </div>

              {/* Atelier quote note */}
              <div className="p-6 rounded-xl border border-white/10 bg-[#101014] text-xs text-[#A8A39A] italic space-y-2">
                <div className="text-[#C9A96E] font-medium not-italic uppercase tracking-widest text-[10px]">
                  ✧ Atelye yanaşması
                </div>
                <p>
                  "Biz kütləvi klinika rejimində deyil, hər bir təbəssümə fərdi zərgərlik əsəri kimi yanaşan estetik atelye prinsipləri ilə çalışırıq."
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* 3. MƏKAN / KLİNİKANIN YERLƏŞDİYİ MƏKAN */}
      <section className="py-20 sm:py-28 bg-[#0A0A0C] border-t border-[#C9A96E]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-[#C9A96E] font-medium mb-1.5">
                Məkan
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#F5F1EA] font-normal">
                Klinikanın yerləşdiyi məkan
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#A8A39A] font-light">
              Mərkəzi və rahat yerləşmə
            </p>
          </div>

          {/* Luxury Stylized Dark Map UI */}
          <div className="relative w-full aspect-[16/8] sm:aspect-[21/9] rounded-2xl overflow-hidden border border-[#C9A96E]/20 bg-[#121215] shadow-[0_20px_50px_rgba(0,0,0,0.8)] flex items-center justify-center p-6">
            
            {/* Grid graphic lines */}
            <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#C9A96E_1px,transparent_1px)] [background-size:24px_24px]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-[#0A0A0C]" />

            {/* Radar concentric rings */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-[#C9A96E]/10 animate-pulse pointer-events-none" />
            <div className="absolute w-44 h-44 sm:w-56 sm:h-56 rounded-full border border-[#C9A96E]/20 pointer-events-none" />

            {/* Center Pin Box */}
            <div className="relative z-10 flex flex-col items-center text-center space-y-2">
              <div className="w-12 h-12 rounded-full bg-[#C9A96E] text-[#0A0A0C] flex items-center justify-center shadow-[0_0_30px_rgba(201,169,110,0.8)] animate-bounce">
                <span className="font-serif text-lg font-bold">✦</span>
              </div>
              
              <div className="px-5 py-2 rounded-full bg-[#18181E]/90 backdrop-blur-md border border-[#C9A96E]/40 text-xs sm:text-sm text-[#F5F1EA] shadow-xl">
                <div className="font-medium tracking-wide">
                  <span className="text-[#C9A96E]">•</span> Diamond Denta • Baku
                </div>
                <div className="text-[10px] text-[#A8A39A] uppercase tracking-widest mt-0.5">
                  VIP Qəbul Rezidensiyası
                </div>
              </div>
            </div>

            {/* Bottom Coordinate Bar & Navigation CTA */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#A8A39A] z-10">
              <div className="flex items-center gap-2 font-mono text-[11px] bg-[#0A0A0C]/80 px-3 py-1.5 rounded-lg border border-white/10">
                <Navigation className="w-3.5 h-3.5 text-[#C9A96E]" />
                <span>{CLINIC_MAP_COORDINATES}</span>
              </div>

              <a
                href={CLINIC_MAPS_LINK}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#C9A96E] hover:bg-[#E6C487] text-[#0A0A0C] text-xs font-medium rounded-lg flex items-center gap-2 transition-all shadow-md"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Xəritədə aç / Naviqasiya</span>
              </a>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
};
