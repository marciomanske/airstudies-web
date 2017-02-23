import { Injectable } from '@angular/core';
import { Language } from '../dto/Language';
import { Status } from '../dto/Status';
import { UserType } from '../dto/UserType';


@Injectable()
export class ConfigService {

  private baseAddressLocal: string = "http://localhost:3500";
  private baseAddressAWS: string = "http://104.236.9.163:3500";

  url = {
    baseAddress: this.baseAddressAWS,
    user: {
      login: "/airstudies/services/user/authenticate",
      validateToken: "/airstudies/services/user/validatetoken",
      find: "/airstudies/services/user/list",
      findById: "/airstudies/services/user",
      new: "/airstudies/services/user/new",
      update: "/airstudies/services/user/update",
      updatePassword: "/airstudies/services/user/updatePassword",
      recoverPassword: "/airstudies/services/user/recoverpassword"
    },
    school: {
      find: "/airstudies/services/school/list",
      findById:"/airstudies/services/school",
      new:"/airstudies/services/school/new",
      update: "/airstudies/services/school/update",
      findByName: "/airstudies/services/school/byname/:name",
    },
    student: {
      find: "/airstudies/services/student/list",
      findById:"/airstudies/services/student",
      new:"/airstudies/services/student/new",
      update: "/airstudies/services/student/update"
    },

    property: {
      find: "/airstudies/services/property/list",
      findById:"/airstudies/services/property",
      new:"/airstudies/services/property/new",
      update: "/airstudies/services/property/update",
      findByName: "/airstudies/services/property/byname/:name",
    },

    contract: {
      find: "/airstudies/services/contract/list",
      findById:"/airstudies/services/contract",
      new:"/airstudies/services/contract/new",
      update: "/airstudies/services/contract/update"
    },

    googleMapURL: "https://maps.googleapis.com/maps/api/geocode/json?address=:my_own_keyword&language=en"
  };

  languages = [
    new Language("ALL", "All languages"),
    new Language("1", "English"),
    new Language("2", "Spanish"),
    new Language("3", "French"),
    new Language("4", "German"),
    new Language("5", "Portuguese")
  ];

  statusList = [
    new Status("ALL", "All"),
    new Status("1", "Actives only"),
    new Status("0", "Inactives only")
  ];


   recoveryMethods = [
   {value: 1, label: "E-mail"},
   {value: 2, label: "SMS"},
   {value: 3, label: "Both"}
   ];

  userTypes = [
    new UserType("ALL", "All users"),
    new UserType("ADMIN", "Administrator"),
    new UserType("SCHOOL", "School"),
    new UserType("STUDENT", "Student"),
    new UserType("AGENCY", "Agency"),
    new UserType("HOUSE_OWNER", "House Owner")
  ];

  allowences = [
    {value: 1, label:"Smoking"},
    {value: 2, label:"Alcoholic Beverages"},
    {value: 3, label:"Couples"},
  ]

  propertyTypes = [
    {value:"VOID", label: "None"},
    {value:"HOUSE", label: "House"},
    {value:"FLAT", label: "Flat"},
    {value:"HOSTEL", label: "Hostel"},
    {value:"HOTEL", label: "Hotel"},
    {value:"BASEMENT", label: "Basement"}
  ];

  transportations = [
      {value: 1, label: "Subway"},
      {value: 2, label: "Train"},
      {value: 3, label: "Street Car"},
      {value: 4, label: "Bus"}
  ]

  facilities = [
      {value: 1, label: "Internet"},
      {value: 2, label: "Loundry"},
      {value: 3, label: "Clothes Dryer"},
      {value: 4, label: "Kitchen"}
  ]


  worldLanguages = [
      {code: "aa", name: "Afar"},
      {code: "ab", name: "Abkhazian"},
      {code: "ae", name: "Avestan"},
      {code: "af", name: "Afrikaans"},
      {code: "ak", name: "Akan"},
      {code: "am", name: "Amharic"},
      {code: "an", name: "Aragonese"},
      {code: "ar", name: "Arabic"},
      {code: "as", name: "Assamese"},
      {code: "av", name: "Avaric"},
      {code: "ay", name: "Aymara"},
      {code: "az", name: "Azerbaijani"},
      {code: "ba", name: "Bashkir"},
      {code: "be", name: "Belarusian"},
      {code: "bg", name: "Bulgarian"},
      {code: "bh", name: "Bihari languages"},
      {code: "bi", name: "Bislama"},
      {code: "bm", name: "Bambara"},
      {code: "bn", name: "Bengali"},
      {code: "bo", name: "Tibetan"},
      {code: "br", name: "Breton"},
      {code: "bs", name: "Bosnian"},
      {code: "ca", name: "Catalan; Valencian"},
      {code: "ce", name: "Chechen"},
      {code: "ch", name: "Chamorro"},
      {code: "co", name: "Corsican"},
      {code: "cr", name: "Cree"},
      {code: "cs", name: "Czech"},
      {code: "cu", name: "Church Slavic"},
      {code: "cv", name: "Chuvash"},
      {code: "cy", name: "Welsh"},
      {code: "da", name: "Danish"},
      {code: "de", name: "German"},
      {code: "dv", name: "Maldivian"},
      {code: "dz", name: "Dzongkha"},
      {code: "ee", name: "Ewe"},
      {code: "el", name: "Greek, Modern (1453-)"},
      {code: "en", name: "English"},
      {code: "eo", name: "Esperanto"},
      {code: "es", name: "Spanish; Castilian"},
      {code: "et", name: "Estonian"},
      {code: "eu", name: "Basque"},
      {code: "fa", name: "Persian"},
      {code: "ff", name: "Fulah"},
      {code: "fi", name: "Finnish"},
      {code: "fj", name: "Fijian"},
      {code: "fo", name: "Faroese"},
      {code: "fr", name: "French"},
      {code: "fy", name: "Western Frisian"},
      {code: "ga", name: "Irish"},
      {code: "gd", name: "Gaelic; Scottish Gaelic"},
      {code: "gl", name: "Galician"},
      {code: "gn", name: "Guarani"},
      {code: "gu", name: "Gujarati"},
      {code: "gv", name: "Manx"},
      {code: "ha", name: "Hausa"},
      {code: "he", name: "Hebrew"},
      {code: "hi", name: "Hindi"},
      {code: "ho", name: "Hiri Motu"},
      {code: "hr", name: "Croatian"},
      {code: "ht", name: "Haitian; Haitian Creole"},
      {code: "hu", name: "Hungarian"},
      {code: "hy", name: "Armenian"},
      {code: "hz", name: "Herero"},
      {code: "id", name: "Indonesian"},
      {code: "ig", name: "Igbo"},
      {code: "ii", name: "Sichuan Yi; Nuosu"},
      {code: "ik", name: "Inupiaq"},
      {code: "io", name: "Ido"},
      {code: "is", name: "Icelandic"},
      {code: "it", name: "Italian"},
      {code: "iu", name: "Inuktitut"},
      {code: "ja", name: "Japanese"},
      {code: "jv", name: "Javanese"},
      {code: "ka", name: "Georgian"},
      {code: "kg", name: "Kongo"},
      {code: "ki", name: "Kikuyu; Gikuyu"},
      {code: "kj", name: "Kuanyama; Kwanyama"},
      {code: "kk", name: "Kazakh"},
      {code: "kl", name: "Kalaallisut; Greenlandic"},
      {code: "km", name: "Central Khmer"},
      {code: "kn", name: "Kannada"},
      {code: "ko", name: "Korean"},
      {code: "kr", name: "Kanuri"},
      {code: "ks", name: "Kashmiri"},
      {code: "ku", name: "Kurdish"},
      {code: "kv", name: "Komi"},
      {code: "kw", name: "Cornish"},
      {code: "ky", name: "Kirghiz; Kyrgyz"},
      {code: "la", name: "Latin"},
      {code: "lb", name: "Luxembourgish; Letzeburgesch"},
      {code: "lg", name: "Ganda"},
      {code: "li", name: "Limburgan; Limburger; Limburgish"},
      {code: "ln", name: "Lingala"},
      {code: "lo", name: "Lao"},
      {code: "lt", name: "Lithuanian"},
      {code: "lu", name: "Luba-Katanga"},
      {code: "lv", name: "Latvian"},
      {code: "mg", name: "Malagasy"},
      {code: "mh", name: "Marshallese"},
      {code: "mi", name: "Maori"},
      {code: "mk", name: "Macedonian"},
      {code: "ml", name: "Malayalam"},
      {code: "mn", name: "Mongolian"},
      {code: "mr", name: "Marathi"},
      {code: "ms", name: "Malay"},
      {code: "mt", name: "Maltese"},
      {code: "my", name: "Burmese"},
      {code: "na", name: "Nauru"},
      {code: "nb", name: "Bokmål, Norwegian; Norwegian Bokmål"},
      {code: "nd", name: "Ndebele, North; North Ndebele"},
      {code: "ne", name: "Nepali"},
      {code: "ng", name: "Ndonga"},
      {code: "nl", name: "Dutch; Flemish"},
      {code: "nn", name: "Norwegian Nynorsk; Nynorsk, Norwegian"},
      {code: "no", name: "Norwegian"},
      {code: "nr", name: "Ndebele, South; South Ndebele"},
      {code: "nv", name: "Navajo; Navaho"},
      {code: "ny", name: "Chichewa; Chewa; Nyanja"},
      {code: "oj", name: "Ojibwa"},
      {code: "om", name: "Oromo"},
      {code: "or", name: "Oriya"},
      {code: "os", name: "Ossetian; Ossetic"},
      {code: "pa", name: "Panjabi; Punjabi"},
      {code: "pi", name: "Pali"},
      {code: "pl", name: "Polish"},
      {code: "ps", name: "Pushto; Pashto"},
      {code: "pt", name: "Portuguese"},
      {code: "qu", name: "Quechua"},
      {code: "rm", name: "Romansh"},
      {code: "rn", name: "Rundi"},
      {code: "ro", name: "Romanian"},
      {code: "ru", name: "Russian"},
      {code: "rw", name: "Kinyarwanda"},
      {code: "sa", name: "Sanskrit"},
      {code: "sc", name: "Sardinian"},
      {code: "sd", name: "Sindhi"},
      {code: "se", name: "Northern Sami"},
      {code: "sg", name: "Sango"},
      {code: "si", name: "Sinhala; Sinhalese"},
      {code: "sk", name: "Slovak"},
      {code: "sl", name: "Slovenian"},
      {code: "sm", name: "Samoan"},
      {code: "sn", name: "Shona"},
      {code: "so", name: "Somali"},
      {code: "sq", name: "Albanian"},
      {code: "sr", name: "Serbian"},
      {code: "ss", name: "Swati"},
      {code: "st", name: "Sotho, Southern"},
      {code: "su", name: "Sundanese"},
      {code: "sv", name: "Swedish"},
      {code: "sw", name: "Swahili"},
      {code: "ta", name: "Tamil"},
      {code: "te", name: "Telugu"},
      {code: "tg", name: "Tajik"},
      {code: "th", name: "Thai"},
      {code: "ti", name: "Tigrinya"},
      {code: "tk", name: "Turkmen"},
      {code: "tl", name: "Tagalog"},
      {code: "tn", name: "Tswana"},
      {code: "to", name: "Tonga (Tonga Islands)"},
      {code: "tr", name: "Turkish"},
      {code: "ts", name: "Tsonga"},
      {code: "tt", name: "Tatar"},
      {code: "tw", name: "Twi"},
      {code: "ty", name: "Tahitian"},
      {code: "ug", name: "Uighur; Uyghur"},
      {code: "uk", name: "Ukrainian"},
      {code: "ur", name: "Urdu"},
      {code: "uz", name: "Uzbek"},
      {code: "ve", name: "Venda"},
      {code: "vi", name: "Vietnamese"},
      {code: "vo", name: "Volapük"},
      {code: "wa", name: "Walloon"},
      {code: "wo", name: "Wolof"},
      {code: "xh", name: "Xhosa"},
      {code: "yi", name: "Yiddish"},
      {code: "yo", name: "Yoruba"},
      {code: "za", name: "Zhuang; Chuang"},
      {code: "zh", name: "Chinese"},
      {code: "zu", name: "Zulu"}
  ];

}
