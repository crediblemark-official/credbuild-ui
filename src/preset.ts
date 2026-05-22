import type { Config } from "@crediblemark/build";
import { HeadingBlock, type HeadingBlockProps } from "./HeadingBlock/HeadingBlock";

import { HeroPublisher, type HeroPublisherProps } from "./Hero/Publisher/Publisher";
import { HeroPublisherTwo, type HeroPublisherTwoProps } from "./Hero/PublisherTwo/PublisherTwo";
import { HeroFitness, type HeroFitnessProps } from "./Hero/Fitness/Fitness";
import { HeroDental, type HeroDentalProps } from "./Hero/Dental/Dental";
import { HeroWedding, type HeroWeddingProps } from "./Hero/Wedding/Wedding";
import { HeroAgency, type HeroAgencyProps } from "./Hero/Agency/Agency";
import { HeroYoga, type HeroYogaProps } from "./Hero/Yoga/Yoga";
import { HeroAutoService, type HeroAutoServiceProps } from "./Hero/AutoService/AutoService";
import { HeroSecurity, type HeroSecurityProps } from "./Hero/Security/Security";
import { HeroMedical, type HeroMedicalProps } from "./Hero/Medical/Medical";
import { HeroRealEstate, type HeroRealEstateProps } from "./Hero/RealEstate/RealEstate";
import { Stats } from "./Stats/Stats";
import type { StatsProps } from "./Stats/types";
import { IconGrid } from "./IconGrid/IconGrid";
import type { IconGridProps } from "./IconGrid/types";
import { Gallery, type GalleryProps } from "./Gallery/Gallery";
import { Accordion, type AccordionProps } from "./Accordion/Accordion";
import { Testimonials } from "./Testimonials/Testimonials";
import type { TestimonialsProps } from "./Testimonials/types";
import { CTA } from "./CTA/CTA";
import type { CTAProps } from "./CTA/types";
import { FlexBlock, type FlexBlockProps } from "./FlexBlock/FlexBlock";
import { Container, type ContainerProps } from "./Container/Container";
import { PricingSimple as Pricing, type PricingSimpleProps as PricingProps } from "./Pricing/Simple/Simple";
import { PricingModern, type PricingModernProps } from "./Pricing/Modern/Modern";
import { PricingBox, type PricingBoxProps } from "./Pricing/Box/Box";
import { PricingGradient, type PricingGradientProps } from "./Pricing/Gradient/Gradient";
import { PricingImage, type PricingImageProps } from "./Pricing/Image/Image";
import { BlogList, type BlogListProps } from "./BlogList/BlogList";
import { AboutCompany } from "./AboutCompany/AboutCompany";
import type { AboutCompanyProps } from "./AboutCompany/types";
import { ProductList, type ProductListProps } from "./ProductList/ProductList";
import { LogoMarquee } from "./LogoMarquee/LogoMarquee";
import type { LogoMarqueeProps } from "./LogoMarquee/types";
import { ContactForm } from "./ContactForm/ContactForm";
import type { ContactFormProps } from "./ContactForm/types";
import { Portfolio } from "./Portfolio/Portfolio";
import type { PortfolioProps } from "./Portfolio/types";
import { RichText, type RichTextProps } from "./RichText/RichText";
import { VideoEmbed } from "./VideoEmbed/VideoEmbed";
import type { VideoEmbedProps } from "./VideoEmbed/types";
import { ProcessSteps } from "./ProcessSteps/ProcessSteps";
import type { ProcessStepsProps } from "./ProcessSteps/types";
import { GoogleMaps } from "./GoogleMaps/GoogleMaps";
import type { GoogleMapsProps } from "./GoogleMaps/types";
import { Team } from "./Team/Team";
import type { TeamProps } from "./Team/types";
import { OpeningHours } from "./OpeningHours/OpeningHours";
import type { OpeningHoursProps } from "./OpeningHours/types";
import { ComparisonTable, type ComparisonTableProps } from "./ComparisonTable/ComparisonTable";
import { CustomEmbed } from "./CustomEmbed/CustomEmbed";
import type { CustomEmbedProps } from "./CustomEmbed/types";
import { SectionHeader, type SectionHeaderProps } from "./SectionHeader/SectionHeader";
import { FeatureItem, type FeatureItemProps } from "./FeatureItem/FeatureItem";
import { InfoGrid, type InfoGridProps } from "./InfoGrid/InfoGrid";
import { SocialFeed } from "./SocialFeed/SocialFeed";
import type { SocialFeedProps } from "./SocialFeed/types";

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
  },
};
