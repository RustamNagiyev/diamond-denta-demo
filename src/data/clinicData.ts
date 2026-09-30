import { ServiceItem, PortfolioCase } from '../types';

export const CLINIC_PHONE_DISPLAY = '050 530 03 69';
export const CLINIC_PHONE_RAW = '0505300369';
export const CLINIC_PHONE_INTL = '+994 50 530 03 69';
export const CLINIC_WHATSAPP_LINK = 'https://wa.me/994505300369?text=Salam,%20Diamond%20Denta%20klinikasına%20qəbula%20yazılmaq%20istəyirəm.';
export const CLINIC_INSTAGRAM_HANDLE = '@diamond_denta';
export const CLINIC_INSTAGRAM_URL = 'https://instagram.com';
export const CLINIC_ADDRESS = 'Baku, Azərbaycan';
export const CLINIC_HOURS = 'Hər gün 11:00 - 19:00';
export const CLINIC_MAP_COORDINATES = '40.4093° N, 49.8671° E • Baku Center';
export const CLINIC_MAPS_LINK = 'https://maps.google.com/?q=40.4093,49.8671';

export const IMAGES = {
  heroSmile: '/src/assets/images/hero_smile_aesthetic_1790778572013.jpg',
  labVeneer: '/src/assets/images/dental_lab_veneer_1790778585413.jpg',
  implantPedestal: '/src/assets/images/dental_implant_pedestal_1790778602038.jpg',
  clinicInterior: '/src/assets/images/dental_clinic_interior_1790778620293.jpg',
  doctorPortrait: '/src/assets/images/dental_doctor_portrait_1790778642166.jpg',
  bracesModel: '/src/assets/images/dental_braces_model_1790778658164.jpg',
  surgerySuite: '/src/assets/images/dental_surgery_suite_1790778669574.jpg',
  beforeTeeth: '/src/assets/images/teeth_before_shot_1790778731545.jpg',
  afterTeeth: '/src/assets/images/teeth_after_shot_1790778746292.jpg',
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'vinir',
    number: '01',
    category: 'ESTETİKA',
    title: 'Keramik Vinirlər',
    subtitle: 'Vinir',
    shortDesc: 'Gözoxşayan, təbii və estetik keramik vinirlər',
    fullDesc: 'Təbii diş minasını qoruyaraq formanı və parlaqlığı mükəmməlləşdirən zərif keramik örtüklər.',
    features: [
      'Minimal cilalama və fərdi rəng seçimi',
      'Uzunömürlü E-max və premium sirkonium',
      'Rəqəmsal gülüş dizaynı (DSD) ilə öncədən baxış',
    ],
    image: IMAGES.labVeneer,
    tag: 'E-MAX KERAMİKA',
  },
  {
    id: 'implant',
    number: '02',
    category: 'BƏRPA',
    title: 'Dental İmplantasiya',
    subtitle: 'İmplant',
    shortDesc: 'Premium keyfiyyətli, ömürlük etibarlı implantasiya',
    fullDesc: 'İtirilmiş dişlərin funksionallığını və təbii estetikasını ömürlük etibarla bərpa edən müasir həllər.',
    features: [
      'İsveçrə və Almaniya istehsalı premium implantlar',
      '3D tomoqrafiya əsasında naviqasiyalı cərrahiyyə',
      'Ağrısız və tez sağalma protokolları',
    ],
    image: IMAGES.implantPedestal,
    tag: 'AURA İMPLANT SİSTEMİ',
  },
  {
    id: 'breket',
    number: '03',
    category: 'ORTODONTİYA',
    title: 'Ortodontik Müalicə və Qapaqlar',
    subtitle: 'Breket',
    shortDesc: 'Gülüş xəttinin mükəmməl düzəldilməsi və ortodontiya',
    fullDesc: 'Hər yaşda diş sırasının və düzgün dişləmin korreksiyası üçün görünməz və estetik sistemlər.',
    features: [
      'Şəffaf qapaqlar (əlayerlər) və sapfir breketlər',
      'Davamlı nəzarət və rəqəmsal planlaşdırma',
      'Üz profilinə uyğunlaşdırılmış ideal oklüziya',
    ],
    image: IMAGES.bracesModel,
    tag: 'RƏQƏMSAL ORTODONTİYA',
  },
  {
    id: 'cerrahiyye',
    number: '04',
    category: 'CƏRRAHİYYƏ',
    title: 'Cərrahi Stomatologiya',
    subtitle: 'Cərrahiyyə',
    shortDesc: 'Ağrısız, dəqiq və təhlükəsiz cərrahi prosedurlar',
    fullDesc: 'Yüksək sterillik və dəqiqlik standartları altında həyata keçirilən təhlükəsiz cərrahi prosedurlar.',
    features: [
      'Atravmatik diş çəkimi və sümük plastikası',
      'Plazmolifting və yumşaq toxuma regenerasiyası',
      'Maksimal komfort və təhlükəsiz sedasiya imkanı',
    ],
    image: IMAGES.surgerySuite,
    tag: 'MİKRO-CƏRRAHİYYƏ',
  },
];

export const GALLERY_CASES: PortfolioCase[] = [
  {
    id: 'case-1',
    category: 'vinir',
    categoryLabel: 'E-MAX KERAMİKA',
    title: 'Təbii Keramik Vinir',
    description: 'İncə mikro-qatlarla tətbiq olunmuş yüksək dərəcəli estetik bərpa.',
    subDetail: '10 diş transformasiyası',
    image: IMAGES.labVeneer,
    badge: 'VİNİR',
    beforeImage: IMAGES.beforeTeeth,
    afterImage: IMAGES.afterTeeth,
  },
  {
    id: 'case-2',
    category: 'vinir',
    categoryLabel: 'ESTETİK VİNİRLƏR',
    title: 'Holivud Təbəssümü',
    description: 'Üz cizgiləri və dodaq dinamikasına uyğunlaşdırılmış proporsiya.',
    subDetail: 'Fərdi simmetriya və qapalı xətlər',
    image: IMAGES.heroSmile,
    badge: 'ESTETİK',
  },
  {
    id: 'case-3',
    category: 'implant',
    categoryLabel: 'İMPLANT & VİNİR',
    title: 'Tam Gülüş Memarlığı',
    description: 'Çeynəmə funksiyasının və vizual harmoniyanın tam bərpası.',
    subDetail: 'Tam qövs reabilitasiya',
    image: IMAGES.implantPedestal,
    badge: 'İMPLANT & VİNİR',
  },
  {
    id: 'case-4',
    category: 'vinir',
    categoryLabel: 'E-MAX KERAMİKA',
    title: 'Litium Disilikat Parlaqlıq',
    description: 'Təbii mina işıqkeçirmə qabiliyyətinə malik yüksək davamlı örtüklər.',
    subDetail: 'Təbii rəng tonu və relyef',
    image: IMAGES.afterTeeth,
    badge: 'VİNİR',
  },
  {
    id: 'case-5',
    category: 'vinir',
    categoryLabel: 'MÜHİT',
    title: 'Rəqəmsal Gülüş Studiyası',
    description: 'Prosedur öncəsi 3D simulyasiya və fərdi arxitektura otağı.',
    subDetail: '3D DSD laboratoriyası',
    image: IMAGES.clinicInterior,
    badge: 'MÜHİT',
  },
  {
    id: 'case-6',
    category: 'breket',
    categoryLabel: 'HƏKİM NƏZARƏTİ',
    title: 'Fərdi Planlama',
    description: 'Təcrübəli estetik həkimlərin rəhbərliyi ilə həyata keçirilən layihələr.',
    subDetail: 'Oklüziyanın tam funksional bərpası',
    image: IMAGES.doctorPortrait,
    badge: 'HƏKİM NƏZARƏTİ',
  },
];
