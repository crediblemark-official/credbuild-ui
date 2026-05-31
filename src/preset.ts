import type { Config } from "@crediblemark/build";
import { HeadingBlock, type HeadingBlockProps } from "./blocks/HeadingBlock/HeadingBlock";

import { HeroPublisher, type HeroPublisherProps } from "./blocks/Hero/Publisher/Publisher";
import { HeroPublisherTwo, type HeroPublisherTwoProps } from "./blocks/Hero/PublisherTwo/PublisherTwo";
import { HeroFitness, type HeroFitnessProps } from "./blocks/Hero/Fitness/Fitness";
import { HeroDental, type HeroDentalProps } from "./blocks/Hero/Dental/Dental";
import { HeroWedding, type HeroWeddingProps } from "./blocks/Hero/Wedding/Wedding";
import { HeroAgency, type HeroAgencyProps } from "./blocks/Hero/Agency/Agency";
import { HeroYoga, type HeroYogaProps } from "./blocks/Hero/Yoga/Yoga";
import { HeroAutoService, type HeroAutoServiceProps } from "./blocks/Hero/AutoService/AutoService";
import { HeroSecurity, type HeroSecurityProps } from "./blocks/Hero/Security/Security";
import { HeroMedical, type HeroMedicalProps } from "./blocks/Hero/Medical/Medical";
import { HeroRealEstate, type HeroRealEstateProps } from "./blocks/Hero/RealEstate/RealEstate";
import { Stats } from "./blocks/Stats/Stats";
import type { StatsProps } from "./blocks/Stats/types";
import { IconGrid } from "./blocks/IconGrid/IconGrid";
import type { IconGridProps } from "./blocks/IconGrid/types";
import { Gallery, type GalleryProps } from "./blocks/Gallery/Gallery";
import { Accordion, type AccordionProps } from "./blocks/Accordion/Accordion";
import { Testimonials } from "./blocks/Testimonials/Testimonials";
import type { TestimonialsProps } from "./blocks/Testimonials/types";
import { CTA } from "./blocks/CTA/CTA";
import type { CTAProps } from "./blocks/CTA/types";
import { FlexBlock, type FlexBlockProps } from "./blocks/FlexBlock/FlexBlock";
import { Container, type ContainerProps } from "./blocks/Container/Container";
import { PricingSimple as Pricing, type PricingSimpleProps as PricingProps } from "./blocks/Pricing/Simple/Simple";
import { PricingModern, type PricingModernProps } from "./blocks/Pricing/Modern/Modern";
import { PricingBox, type PricingBoxProps } from "./blocks/Pricing/Box/Box";
import { PricingGradient, type PricingGradientProps } from "./blocks/Pricing/Gradient/Gradient";
import { PricingImage, type PricingImageProps } from "./blocks/Pricing/Image/Image";
import { BlogList, type BlogListProps } from "./blocks/BlogList/BlogList";
import { AboutCompany } from "./blocks/AboutCompany/AboutCompany";
import type { AboutCompanyProps } from "./blocks/AboutCompany/types";
import { ProductList, type ProductListProps } from "./blocks/ProductList/ProductList";
import { LogoMarquee } from "./blocks/LogoMarquee/LogoMarquee";
import type { LogoMarqueeProps } from "./blocks/LogoMarquee/types";
import { ContactForm } from "./blocks/ContactForm/ContactForm";
import type { ContactFormProps } from "./blocks/ContactForm/types";
import { Portfolio } from "./blocks/Portfolio/Portfolio";
import type { PortfolioProps } from "./blocks/Portfolio/types";
import { RichText, type RichTextProps } from "./blocks/RichText/RichText";
import { VideoEmbed } from "./blocks/VideoEmbed/VideoEmbed";
import type { VideoEmbedProps } from "./blocks/VideoEmbed/types";
import { ProcessSteps } from "./blocks/ProcessSteps/ProcessSteps";
import type { ProcessStepsProps } from "./blocks/ProcessSteps/types";
import { GoogleMaps } from "./blocks/GoogleMaps/GoogleMaps";
import type { GoogleMapsProps } from "./blocks/GoogleMaps/types";
import { Team } from "./blocks/Team/Team";
import type { TeamProps } from "./blocks/Team/types";
import { OpeningHours } from "./blocks/OpeningHours/OpeningHours";
import type { OpeningHoursProps } from "./blocks/OpeningHours/types";
import { ComparisonTable, type ComparisonTableProps } from "./blocks/ComparisonTable/ComparisonTable";
import { CustomEmbed } from "./blocks/CustomEmbed/CustomEmbed";
import type { CustomEmbedProps } from "./blocks/CustomEmbed/types";
import { SectionHeader, type SectionHeaderProps } from "./blocks/SectionHeader/SectionHeader";
import { FeatureItem, type FeatureItemProps } from "./blocks/FeatureItem/FeatureItem";
import { InfoGrid, type InfoGridProps } from "./blocks/InfoGrid/InfoGrid";
import { SocialFeed } from "./blocks/SocialFeed/SocialFeed";
import type { SocialFeedProps } from "./blocks/SocialFeed/types";
import { Button } from "./blocks/Button/Button";
import type { ButtonProps } from "./blocks/Button/types";
import { SingleImage } from "./blocks/SingleImage/SingleImage";
import type { SingleImageProps } from "./blocks/SingleImage/types";
import { OrderForm } from "./blocks/OrderForm/OrderForm";
import type { OrderFormProps } from "./blocks/OrderForm/types";
import { Divider } from "./blocks/Divider/Divider";
import type { DividerProps } from "./blocks/Divider/types";
import { ListBlock } from "./blocks/ListBlock/ListBlock";
import type { ListBlockProps } from "./blocks/ListBlock/types";
import { Animation } from "./blocks/Animation/Animation";
import type { AnimationProps } from "./blocks/Animation/types";


export type BuildUiPresetProps = {
  HeadingBlock: HeadingBlockProps;
  HeroPublisher: HeroPublisherProps;
  HeroPublisherTwo: HeroPublisherTwoProps;
  HeroFitness: HeroFitnessProps;
  HeroDental: HeroDentalProps;
  HeroWedding: HeroWeddingProps;
  HeroAgency: HeroAgencyProps;
  HeroYoga: HeroYogaProps;
  HeroAutoService: HeroAutoServiceProps;
  HeroSecurity: HeroSecurityProps;
  HeroMedical: HeroMedicalProps;
  HeroRealEstate: HeroRealEstateProps;
  Stats: StatsProps;
  IconGrid: IconGridProps;
  Pricing: PricingProps;
  PricingModern: PricingModernProps;
  PricingBox: PricingBoxProps;
  PricingGradient: PricingGradientProps;
  PricingImage: PricingImageProps;
  BlogList: BlogListProps;
  Gallery: GalleryProps;
  Accordion: AccordionProps;
  Testimonials: TestimonialsProps;
  LogoMarquee: LogoMarqueeProps;
  CTA: CTAProps;
  FlexBlock: FlexBlockProps;
  Container: ContainerProps;
  AboutCompany: AboutCompanyProps;
  ProductList: ProductListProps;
  ContactForm: ContactFormProps;
  Portfolio: PortfolioProps;
  RichText: RichTextProps;
  VideoEmbed: VideoEmbedProps;
  ProcessSteps: ProcessStepsProps;
  GoogleMaps: GoogleMapsProps;
  Team: TeamProps;
  OpeningHours: OpeningHoursProps;
  ComparisonTable: ComparisonTableProps;
  CustomEmbed: CustomEmbedProps;
  SectionHeader: SectionHeaderProps;
  FeatureItem: FeatureItemProps;
  InfoGrid: InfoGridProps;
  SocialFeed: SocialFeedProps;
  Button: ButtonProps;
  SingleImage: SingleImageProps;
  OrderForm: OrderFormProps;
  Divider: DividerProps;
  ListBlock: ListBlockProps;
  Animation: AnimationProps;
};

export const buildUiPreset: Config<BuildUiPresetProps> = {
  categories: {
    "Hero Sections": {
      components: [
        "HeroPublisher",
        "HeroPublisherTwo",
        "HeroFitness",
        "HeroDental",
        "HeroWedding",
        "HeroAgency",
        "HeroYoga",
        "HeroAutoService",
        "HeroSecurity",
        "HeroMedical",
        "HeroRealEstate",
      ],
    },
    "Content": {
      components: [
        "Stats",
        "Testimonials",
        "LogoMarquee",
        "Accordion",
        "IconGrid",
        "BlogList",
        "AboutCompany",
        "Portfolio",
        "ContactForm",
        "ProcessSteps",
        "GoogleMaps",
        "Team",
        "OpeningHours",
        "InfoGrid",
        "ListBlock",
      ],
    },
    "Marketing": {
      components: [
        "CTA",
        "Pricing",
        "PricingModern",
        "PricingBox",
        "PricingGradient",
        "PricingImage",
        "Gallery",
        "ProductList",
        "VideoEmbed",
        "ComparisonTable",
        "SocialFeed",
        "OrderForm",
      ],
    },
    "Layout": {
      components: ["Container"],
    },
    "Basic": {
      components: [
        "FlexBlock",
        "HeadingBlock",
        "SectionHeader",
        "RichText",
        "CustomEmbed",
        "FeatureItem",
        "Button",
        "SingleImage",
        "Divider",
        "Animation",
      ],
    },
  },
  components: {
    HeadingBlock: { ...HeadingBlock, label: "Heading" },

    HeroPublisher: { ...HeroPublisher, label: "Book Publisher" },
    HeroPublisherTwo: { ...HeroPublisherTwo, label: "Elite Publisher" },
    HeroFitness: { ...HeroFitness, label: "Fitness & Gym" },
    HeroDental: { ...HeroDental, label: "Dental Clinic" },
    HeroWedding: { ...HeroWedding, label: "Wedding & Events" },
    HeroAgency: { ...HeroAgency, label: "Design Agency" },
    HeroYoga: { ...HeroYoga, label: "Yoga & Wellness" },
    HeroAutoService: { ...HeroAutoService, label: "Auto Service" },
    HeroSecurity: { ...HeroSecurity, label: "Security Tech" },
    HeroMedical: { ...HeroMedical, label: "Medical Health" },
    HeroRealEstate: { ...HeroRealEstate, label: "Real Estate" },
    Stats: { ...Stats, label: "Data Stats" },
    IconGrid: { ...IconGrid, label: "Icon Grid" },
    Pricing: { ...Pricing, label: "Simple Pricing" },
    PricingModern: { ...PricingModern, label: "Modern Pricing" },
    PricingBox: { ...PricingBox, label: "Box Pricing" },
    PricingGradient: { ...PricingGradient, label: "Gradient Pricing" },
    PricingImage: { ...PricingImage, label: "Visual Pricing" },
    BlogList: { ...BlogList, label: "Blog Feed" },
    Gallery: { ...Gallery, label: "Image Gallery" },
    Accordion: { ...Accordion, label: "FAQ Accordion" },
    Testimonials: { ...Testimonials, label: "User Reviews" },
    LogoMarquee: { ...LogoMarquee, label: "Logo Marquee" },
    CTA: { ...CTA, label: "Call to Action" },
    FlexBlock: { ...FlexBlock, label: "Custom Flex" },
    Container: { ...Container, label: "Section Container" },
    AboutCompany: { ...AboutCompany, label: "Company Profile" },
    ProductList: { ...ProductList, label: "Product Showreel" },
    ContactForm: { ...ContactForm, label: "Contact Form" },
    Portfolio: { ...Portfolio, label: "Work Portfolio" },
    VideoEmbed: { ...VideoEmbed, label: "Video Player" },
    ProcessSteps: { ...ProcessSteps, label: "Process Steps" },
    GoogleMaps: { ...GoogleMaps, label: "Google Maps" },
    Team: { ...Team, label: "Team Members" },
    OpeningHours: { ...OpeningHours, label: "Opening Hours" },
    ComparisonTable: { ...ComparisonTable, label: "Comparison Table" },
    CustomEmbed: { ...CustomEmbed, label: "Custom Embed" },
    SectionHeader: { ...SectionHeader, label: "Section Header / Title" },
    RichText: { ...RichText, label: "Rich Text (Tiptap)" },
    FeatureItem: { ...FeatureItem, label: "Feature / Info Box" },
    InfoGrid: { ...InfoGrid, label: "Info Grid (Data Perusahaan)" },
    SocialFeed: { ...SocialFeed, label: "Social Media Feed" },
    Button: { ...Button, label: "Custom Button" },
    SingleImage: { ...SingleImage, label: "Gambar Single" },
    OrderForm: { ...OrderForm, label: "Form Pemesanan" },
    Divider: { ...Divider, label: "Divider / Pembatas" },
    ListBlock: { ...ListBlock, label: "Daftar / List Item" },
    Animation: { ...Animation, label: "Animasi Penunjuk" },
  },
};
