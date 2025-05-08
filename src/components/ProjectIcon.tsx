import React from 'react';
import { 
  Smartphone, 
  Cpu, 
  Globe2, 
  GamepadIcon, 
  Calculator, 
  BookOpen, 
  ShoppingCart, 
  Pill,
  Mic,
  MonitorIcon
} from 'lucide-react';

interface ProjectIconProps {
  name: string;
  className?: string;
}

const iconMap = {
  ShoppingCart,
  Pill,
  Globe2,
  Cpu,
  Smartphone,
  GamepadIcon,
  Calculator,
  BookOpen,
  Mic,
  MonitorIcon
};

export function ProjectIcon({ name, className }: ProjectIconProps) {
  const Icon = iconMap[name as keyof typeof iconMap];
  if (!Icon) return null;
  
  return <Icon className={className} />;
}