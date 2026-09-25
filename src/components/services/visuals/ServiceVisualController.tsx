import React from 'react';
import { DigitalMarketingVisual } from './DigitalMarketingVisual';
import { PerformanceMarketingVisual } from './PerformanceMarketingVisual';
import { SocialMediaVisual } from './SocialMediaVisual';
import { GraphicDesignVisual } from './GraphicDesignVisual';
import { BrandingVisual } from './BrandingVisual';
import { WebDesignVisual } from './WebDesignVisual';

interface ServiceVisualControllerProps {
  serviceId: string;
  progress: number;
  isDark: boolean;
}

export const ServiceVisualController: React.FC<ServiceVisualControllerProps> = ({
  serviceId,
  progress,
  isDark,
}) => {
  switch (serviceId) {
    case 'digital-marketing':
      return <DigitalMarketingVisual progress={progress} isDark={isDark} />;
    case 'performance-marketing':
      return <PerformanceMarketingVisual progress={progress} isDark={isDark} />;
    case 'social-media':
      return <SocialMediaVisual progress={progress} isDark={isDark} />;
    case 'graphic-design':
      return <GraphicDesignVisual progress={progress} isDark={isDark} />;
    case 'branding':
      return <BrandingVisual progress={progress} isDark={isDark} />;
    case 'web-design':
      return <WebDesignVisual progress={progress} isDark={isDark} />;
    default:
      return <DigitalMarketingVisual progress={progress} isDark={isDark} />;
  }
};
