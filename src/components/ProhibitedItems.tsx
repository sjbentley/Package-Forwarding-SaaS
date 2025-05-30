
import React, { useState } from 'react';
import { Ban, AlertTriangle, Info } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';

type ItemStatus = 'prohibited' | 'limited' | 'allowed';

interface ProhibitedItem {
  id: string;
  name: string;
  status: ItemStatus;
  description: string;
  icon: string;
}

interface CountryRestrictions {
  countryCode: string;
  countryName: string;
  flag: string;
  items: ProhibitedItem[];
}

const COUNTRY_RESTRICTIONS: CountryRestrictions[] = [
  {
    countryCode: 'DE',
    countryName: 'Germany',
    flag: '🇩🇪',
    items: [
      { id: 'aerosols', name: 'Aerosols', status: 'limited', description: 'Limited quantities with proper packaging.', icon: '🧴' },
      { id: 'agriculture', name: 'Agriculture', status: 'prohibited', description: 'Seeds, plants, and soil are prohibited.', icon: '🌱' },
      { id: 'alcohol', name: 'Alcohol', status: 'limited', description: 'Limited quantities with proper documentation.', icon: '🍷' },
      { id: 'animals', name: 'Animals', status: 'prohibited', description: 'Live or preserved animals are prohibited.', icon: '🐄' },
      { id: 'art', name: 'Art and Antiquities', status: 'limited', description: 'Requires documentation and may be subject to duties.', icon: '🖼️' },
      { id: 'batteries', name: 'Batteries', status: 'limited', description: 'Lithium and lead-acid batteries have special restrictions.', icon: '🔋' },
      { id: 'biohazards', name: 'Biohazards', status: 'prohibited', description: 'Biological materials are strictly prohibited.', icon: '☣️' },
      { id: 'cbd', name: 'CBD Products', status: 'prohibited', description: 'CBD products are prohibited.', icon: '🌿' },
      { id: 'cellphone', name: 'Cell Phones', status: 'limited', description: 'Must comply with telecommunications regulations.', icon: '📱' },
      { id: 'chemicals', name: 'Chemicals', status: 'prohibited', description: 'Hazardous chemicals are not allowed.', icon: '🧪' },
      { id: 'corrosive', name: 'Corrosive Materials', status: 'prohibited', description: 'Corrosive substances that can damage other items are prohibited.', icon: '⚗️' },
      { id: 'counterfeit', name: 'Counterfeit Goods', status: 'prohibited', description: 'Fake or replicated brand items are illegal.', icon: '🚫' },
      { id: 'drugs', name: 'Drugs', status: 'prohibited', description: 'Illegal and prescription drugs are prohibited.', icon: '💊' },
      { id: 'drugContraband', name: 'Drug Contraband', status: 'prohibited', description: 'Items associated with illegal drug use are prohibited.', icon: '💉' },
      { id: 'ecigarettes', name: 'E-cigarettes', status: 'prohibited', description: 'E-cigarettes and related products are banned.', icon: '🚬' },
      { id: 'ejuice', name: 'E-Juice', status: 'prohibited', description: 'Liquids for e-cigarettes are prohibited.', icon: '💧' },
      { id: 'eccnRegulated', name: 'ECCN Regulated Items', status: 'prohibited', description: 'Export-controlled items requiring special licenses.', icon: '🔒' },
      { id: 'electronics', name: 'Electronics', status: 'limited', description: 'Certain electronics require special clearance.', icon: '💻' },
      { id: 'electricBikes', name: 'Electric Bikes over 100Wh', status: 'prohibited', description: 'High-powered electric bikes are prohibited.', icon: '🚲' },
      { id: 'engines', name: 'Engines', status: 'prohibited', description: 'Vehicle engines may require special permits.', icon: '🔧' },
      { id: 'erotic', name: 'Erotic Materials', status: 'prohibited', description: 'Adult content is prohibited.', icon: '📚' },
      { id: 'explosives', name: 'Explosives', status: 'prohibited', description: 'All explosive materials are strictly forbidden.', icon: '💥' },
      { id: 'fertilizers', name: 'Fertilizers and Pesticides', status: 'prohibited', description: 'Agricultural chemicals are prohibited.', icon: '🌾' },
      { id: 'firearms', name: 'Firearms & Airsoft', status: 'prohibited', description: 'All firearms and replicas are prohibited.', icon: '🔫' },
      { id: 'flammable', name: 'Flammable Materials', status: 'prohibited', description: 'Flammable substances are not permitted.', icon: '🔥' },
      { id: 'flammableCosmetics', name: 'Flammable Cosmetics, Beauty Products', status: 'limited', description: 'Cosmetics with flammable ingredients are restricted.', icon: '💄' },
      { id: 'flammableNail', name: 'Flammable Nail Polish', status: 'limited', description: 'Nail polish with flammable ingredients is restricted.', icon: '💅' },
      { id: 'food', name: 'Perishable Food', status: 'limited', description: 'Limited food items with strict packaging requirements.', icon: '🥫' },
      { id: 'gambling', name: 'Gambling Devices', status: 'prohibited', description: 'Gambling equipment is prohibited.', icon: '🎲' },
      { id: 'graphicViolence', name: 'Graphic Violence', status: 'limited', description: 'Materials depicting violence may be restricted.', icon: '📕' },
      { id: 'handSanitizer', name: 'Hand Sanitizer', status: 'limited', description: 'Limited quantities due to alcohol content.', icon: '🧴' },
      { id: 'hazardousMaterial', name: 'Hazardous Material & Dangerous Goods', status: 'prohibited', description: 'Materials that pose safety risks are prohibited.', icon: '☠️' },
      { id: 'honey', name: 'Honey', status: 'limited', description: 'Food regulations apply to honey products.', icon: '🍯' },
      { id: 'hoverboards', name: 'Hoverboards', status: 'prohibited', description: 'Self-balancing scooters are banned due to battery concerns.', icon: '🛹' },
      { id: 'humanRemains', name: 'Human Remains', status: 'prohibited', description: 'Human remains of any kind are prohibited.', icon: '⚱️' },
      { id: 'ivory', name: 'Ivory', status: 'prohibited', description: 'All ivory products are banned.', icon: '🐘' },
      { id: 'jewelry', name: 'Jewelry', status: 'limited', description: 'Jewelry shipments have value and documentation restrictions.', icon: '💎' },
      { id: 'knives', name: 'Knives', status: 'limited', description: 'Certain types of knives are restricted.', icon: '🔪' },
      { id: 'leadAcid', name: 'Lead Acid Batteries', status: 'prohibited', description: 'Due to hazardous material concerns.', icon: '🔋' },
      { id: 'leather', name: 'Leather Products', status: 'limited', description: 'Some exotic leather products may be restricted.', icon: '👜' },
      { id: 'liquids', name: 'Liquids', status: 'limited', description: 'Liquid products are subject to quantity restrictions.', icon: '💧' },
      { id: 'lithiumBatteries', name: 'Lithium Batteries (packaged with product)', status: 'limited', description: 'Must follow strict packaging guidelines.', icon: '🔋' },
      { id: 'looseLithium', name: 'Loose Lithium Batteries', status: 'prohibited', description: 'Uninstalled lithium batteries are prohibited.', icon: '🔋' },
      { id: 'loosePrecious', name: 'Loose Precious Stones', status: 'prohibited', description: 'Unset gemstones may require special documentation.', icon: '💎' },
      { id: 'meansOfPayment', name: 'Means of Payment', status: 'prohibited', description: 'Cash, checks, and other payment instruments are restricted.', icon: '💰' },
      { id: 'medical', name: 'Medical Devices', status: 'limited', description: 'Requires specific medical certifications.', icon: '💉' },
      { id: 'otcDrugs', name: 'Over the Counter Drugs', status: 'limited', description: 'Some medications may require documentation.', icon: '💊' },
      { id: 'perfume', name: 'Perfume/Cologne', status: 'limited', description: 'Limited quantities with alcohol content restrictions.', icon: '🧴' },
      { id: 'perishableFood', name: 'Perishable Food', status: 'limited', description: 'Food that spoils quickly has strict limitations.', icon: '🍎' },
      { id: 'petSupplies', name: 'Pet Supplies', status: 'limited', description: 'Some pet products may be restricted.', icon: '🐾' },
      { id: 'plants', name: 'Plants', status: 'prohibited', description: 'Live plants and seeds are not allowed.', icon: '🌱' },
      { id: 'poison', name: 'Poison', status: 'prohibited', description: 'All poisonous substances are strictly forbidden.', icon: '☠️' },
      { id: 'political', name: 'Political Materials', status: 'prohibited', description: 'Certain political materials may be restricted.', icon: '🗳️' },
      { id: 'pornography', name: 'Pornography', status: 'prohibited', description: 'Adult content is prohibited.', icon: '🔞' },
      { id: 'prescription', name: 'Prescription Drugs', status: 'prohibited', description: 'Personal medication requires special documentation.', icon: '💊' },
      { id: 'pressurizedCanisters', name: 'Pressurized Canisters', status: 'prohibited', description: 'Aerosol cans and other pressurized containers are restricted.', icon: '🧯' },
      { id: 'radioactive', name: 'Radioactive Material', status: 'prohibited', description: 'Any radioactive substances are strictly prohibited.', icon: '☢️' },
      { id: 'soil', name: 'Soil', status: 'prohibited', description: 'Soil samples or products containing soil are prohibited.', icon: '🌰' },
      { id: 'stamps', name: 'Stamps', status: 'limited', description: 'Postage stamps may have import restrictions.', icon: '📮' },
      { id: 'tacticalEquipment', name: 'Tactical Equipment', status: 'prohibited', description: 'Military-grade equipment is prohibited.', icon: '🛡️' },
      { id: 'tacticalKnives', name: 'Tactical Knives', status: 'prohibited', description: 'Combat knives are prohibited.', icon: '🔪' },
      { id: 'tobacco', name: 'Tobacco and Nicotine Products', status: 'prohibited', description: 'Cigarettes and other tobacco products are restricted.', icon: '🚬' },
      { id: 'toyGuns', name: 'Toy Guns & Weapons', status: 'limited', description: 'Replica weapons may be restricted.', icon: '🔫' },
      { id: 'usedAutoParts', name: 'Used Auto Parts', status: 'limited', description: 'May require certification of cleanliness.', icon: '🚗' },
      { id: 'valuables', name: 'Valuables', status: 'limited', description: 'High-value items require special handling and insurance.', icon: '💰' },
      { id: 'vitamins', name: 'Vitamin and Health Supplements', status: 'limited', description: 'Some supplements may be restricted.', icon: '💊' },
      { id: 'weapons', name: 'Weapons', status: 'prohibited', description: 'All weapons including replicas are prohibited.', icon: '⚔️' },
      // New items added
      { id: 'antiquities', name: 'Antiquities', status: 'prohibited', description: 'Historical artifacts without proper documentation are prohibited.', icon: '🏺' },
      { id: 'currency', name: 'Currency Over €10,000', status: 'prohibited', description: 'Large amounts of cash must be declared and may be restricted.', icon: '💶' },
      { id: 'drones', name: 'Drones', status: 'limited', description: 'Subject to aviation regulations and restrictions.', icon: '🚁' },
      { id: 'endangered', name: 'Endangered Species Products', status: 'prohibited', description: 'Items made from protected species are illegal to import.', icon: '🐆' },
      { id: 'forgedDocuments', name: 'Forged Documents', status: 'prohibited', description: 'Fake IDs, passports, or other official documents are illegal.', icon: '📄' },
      { id: 'furs', name: 'Furs', status: 'prohibited', description: 'Many fur products are banned or heavily restricted.', icon: '🧥' },
      { id: 'hacking', name: 'Hacking Devices', status: 'prohibited', description: 'Devices designed for unauthorized system access.', icon: '🔓' },
      { id: 'mercury', name: 'Mercury Products', status: 'prohibited', description: 'Products containing mercury are banned.', icon: '🧪' },
      { id: 'satelliteEquipment', name: 'Satellite Equipment', status: 'prohibited', description: 'Communication equipment may require special licensing.', icon: '📡' },
      { id: 'surveillanceEquipment', name: 'Surveillance Equipment', status: 'prohibited', description: 'Specialized equipment may be restricted by law.', icon: '👁️' }
    ]
  },
  {
    countryCode: 'US',
    countryName: 'United States',
    flag: '🇺🇸',
    items: [
      { id: 'aerosols', name: 'Aerosols', status: 'limited', description: 'Limited quantities allowed with proper packaging.', icon: '🧴' },
      { id: 'agriculture', name: 'Agriculture', status: 'prohibited', description: 'Seeds, plants, and soil require permits.', icon: '🌱' },
      { id: 'alcohol', name: 'Alcohol', status: 'limited', description: 'Limited quantities with proper documentation.', icon: '🍷' },
      { id: 'animals', name: 'Animals', status: 'prohibited', description: 'Live animals require permits and health certificates.', icon: '🐄' },
      { id: 'art', name: 'Art and Antiquities', status: 'limited', description: 'Items over 100 years old require special clearance.', icon: '🖼️' },
      { id: 'biohazards', name: 'Biohazards', status: 'prohibited', description: 'Biological materials are strictly prohibited.', icon: '☣️' },
      { id: 'cbd', name: 'CBD', status: 'prohibited', description: 'CBD products with THC are prohibited.', icon: '🌿' },
      { id: 'cellphone', name: 'Cell Phones', status: 'limited', description: 'Must comply with FCC regulations.', icon: '📱' },
      { id: 'chemicals', name: 'Chemicals', status: 'prohibited', description: 'Hazardous chemicals require special permits.', icon: '🧪' },
      { id: 'corrosive', name: 'Corrosive Materials', status: 'prohibited', description: 'Substances that can damage other items are prohibited.', icon: '⚗️' },
      { id: 'counterfeit', name: 'Counterfeit Goods', status: 'prohibited', description: 'Illegal under U.S. trademark laws.', icon: '🚫' },
      { id: 'drugContraband', name: 'Drug Contraband', status: 'prohibited', description: 'Items related to illegal drug use are prohibited.', icon: '💉' },
      { id: 'ecigarettes', name: 'E-cigarettes', status: 'prohibited', description: 'Subject to FDA regulations.', icon: '🚬' },
      { id: 'ejuice', name: 'E-Juice', status: 'prohibited', description: 'Liquids containing nicotine are restricted.', icon: '💧' },
      { id: 'eccnRegulated', name: 'ECCN Regulated Items', status: 'prohibited', description: 'Export-controlled items requiring special licenses.', icon: '🔒' },
      { id: 'electricBikes', name: 'Electric Bikes over 100Wh', status: 'prohibited', description: 'High-powered electric bikes need special permits.', icon: '🚲' },
      { id: 'engines', name: 'Engines', status: 'prohibited', description: 'May require EPA compliance.', icon: '🔧' },
      { id: 'erotic', name: 'Erotic Materials', status: 'prohibited', description: 'Subject to obscenity laws.', icon: '📚' },
      { id: 'firearms', name: 'Firearms & Airsoft', status: 'prohibited', description: 'Firearms require special licenses and permits.', icon: '🔫' },
      { id: 'flammable', name: 'Flammable Materials', status: 'prohibited', description: 'Flammable materials are restricted.', icon: '🔥' },
      { id: 'flammableCosmetics', name: 'Flammable Cosmetics', status: 'limited', description: 'Subject to DOT regulations.', icon: '💄' },
      { id: 'flammableNail', name: 'Flammable Nail Polish', status: 'limited', description: 'Limited quantities only.', icon: '💅' },
      { id: 'foodstuff', name: 'Foodstuff', status: 'limited', description: 'Subject to FDA and USDA regulations.', icon: '🥫' },
      { id: 'gambling', name: 'Gambling Devices', status: 'prohibited', description: 'Gambling devices are restricted in many states.', icon: '🎲' },
      { id: 'graphicViolence', name: 'Graphic Violence', status: 'limited', description: 'Materials may be subject to review.', icon: '📕' },
      { id: 'handSanitizer', name: 'Hand Sanitizer', status: 'limited', description: 'Limited quantities due to alcohol content.', icon: '🧴' },
      { id: 'hazardous', name: 'Hazardous Materials', status: 'prohibited', description: 'Dangerous goods are prohibited.', icon: '☠️' },
      { id: 'honey', name: 'Honey', status: 'limited', description: 'Subject to agricultural inspection.', icon: '🍯' },
      { id: 'hoverboards', name: 'Hoverboards', status: 'prohibited', description: 'Many carriers refuse due to fire risk.', icon: '🛹' },
      { id: 'humanRemains', name: 'Human Remains', status: 'prohibited', description: 'Special permits required.', icon: '⚱️' },
      { id: 'ivory', name: 'Ivory', status: 'prohibited', description: 'Banned under conservation laws.', icon: '🐘' },
      { id: 'jewelry', name: 'Jewelry', status: 'limited', description: 'High-value items require insurance.', icon: '💎' },
      { id: 'knives', name: 'Knives', status: 'limited', description: 'Some types prohibited by federal law.', icon: '🔪' },
      { id: 'leadAcid', name: 'Lead Acid Batteries', status: 'prohibited', description: 'Considered hazardous material.', icon: '🔋' },
      { id: 'leather', name: 'Leather Products', status: 'limited', description: 'Exotic leather may be restricted.', icon: '👜' },
      { id: 'liquids', name: 'Liquids', status: 'limited', description: 'Subject to quantity restrictions.', icon: '💧' },
      { id: 'lithiumBatteries', name: 'Lithium Batteries', status: 'limited', description: 'Special packaging required.', icon: '🔋' },
      { id: 'looseLithium', name: 'Loose Lithium Batteries', status: 'prohibited', description: 'Uninstalled batteries are restricted.', icon: '🔋' },
      { id: 'loosePrecious', name: 'Loose Precious Stones', status: 'prohibited', description: 'High-value gems require documentation.', icon: '💎' },
      { id: 'meansOfPayment', name: 'Means of Payment', status: 'prohibited', description: 'Cash and monetary instruments over $10,000 must be declared.', icon: '💰' },
      { id: 'medical', name: 'Medical Devices', status: 'limited', description: 'FDA regulations apply.', icon: '💉' },
      { id: 'otcDrugs', name: 'Over the Counter Drugs', status: 'limited', description: 'Subject to FDA regulations.', icon: '💊' },
      { id: 'perfume', name: 'Perfume/Cologne', status: 'limited', description: 'Limited quantities due to alcohol content.', icon: '🧴' },
      { id: 'perishableFood', name: 'Perishable Food', status: 'limited', description: 'Subject to USDA inspection.', icon: '🍎' },
      { id: 'petSupplies', name: 'Pet Supplies', status: 'limited', description: 'Some products may be restricted.', icon: '🐾' },
      { id: 'plants', name: 'Plants', status: 'prohibited', description: 'Require USDA permits.', icon: '🌱' },
      { id: 'poison', name: 'Poison', status: 'prohibited', description: 'Toxic substances are prohibited.', icon: '☠️' },
      { id: 'political', name: 'Political Materials', status: 'prohibited', description: 'May be subject to review.', icon: '🗳️' },
      { id: 'pornography', name: 'Pornography', status: 'prohibited', description: 'Subject to obscenity laws.', icon: '🔞' },
      { id: 'prescription', name: 'Prescription Drugs', status: 'prohibited', description: 'Requires FDA approval and prescription.', icon: '💊' },
      { id: 'pressurizedCanisters', name: 'Pressurized Canisters', status: 'prohibited', description: 'Considered hazardous materials.', icon: '🧯' },
      { id: 'radioactive', name: 'Radioactive Material', status: 'prohibited', description: 'Strictly controlled.', icon: '☢️' },
      { id: 'soil', name: 'Soil', status: 'prohibited', description: 'Prohibited without permits.', icon: '🌰' },
      { id: 'stamps', name: 'Stamps', status: 'limited', description: 'Collectible stamps may have restrictions.', icon: '📮' },
      { id: 'tacticalEquipment', name: 'Tactical Equipment', status: 'prohibited', description: 'Military-grade equipment is restricted.', icon: '🛡️' },
      { id: 'tacticalKnives', name: 'Tactical Knives', status: 'prohibited', description: 'Many types restricted by federal law.', icon: '🔪' },
      { id: 'tobacco', name: 'Tobacco Products', status: 'prohibited', description: 'Subject to FDA and state regulations.', icon: '🚬' },
      { id: 'toyGuns', name: 'Toy Guns & Weapons', status: 'limited', description: 'Must have orange tips and meet federal requirements.', icon: '🔫' },
      { id: 'usedAutoParts', name: 'Used Auto Parts', status: 'limited', description: 'May require proof of cleanliness.', icon: '🚗' },
      { id: 'valuables', name: 'Valuables Limited', status: 'limited', description: 'High-value items require insurance.', icon: '💰' },
      { id: 'vitamins', name: 'Vitamin and Health Supplements', status: 'limited', description: 'Subject to FDA regulations.', icon: '💊' },
      { id: 'weapons', name: 'Weapons', status: 'prohibited', description: 'All weapons require special permits.', icon: '⚔️' },
      { id: 'explosives', name: 'Explosives', status: 'prohibited', description: 'Explosives are strictly prohibited.', icon: '💣' },
      // New items added
      { id: 'kava', name: 'Kava', status: 'prohibited', description: 'Banned in many states and subject to FDA restrictions.', icon: '🌿' },
      { id: 'kratom', name: 'Kratom', status: 'prohibited', description: 'Illegal in some states and under DEA review.', icon: '🍃' },
      { id: 'lacquerware', name: 'Lacquerware', status: 'limited', description: 'May be subject to finish/coating restrictions.', icon: '🏺' },
      { id: 'meatProducts', name: 'Meat Products', status: 'prohibited', description: 'Subject to strict USDA regulations and often prohibited.', icon: '🥩' },
      { id: 'pesticides', name: 'Pesticides', status: 'prohibited', description: 'Regulated by EPA and often prohibited for import.', icon: '🐛' },
      { id: 'seeds', name: 'Seeds', status: 'prohibited', description: 'Most seeds require USDA permits and phytosanitary certificates.', icon: '🌾' },
      { id: 'taxidermy', name: 'Taxidermy', status: 'prohibited', description: 'Preserved animals may contain protected species.', icon: '🦌' },
      { id: 'tradingCards', name: 'Trading Cards (High Value)', status: 'limited', description: 'Collectibles over certain values require insurance.', icon: '🃏' },
      { id: 'unregisteredFoodSupplements', name: 'Unregistered Food Supplements', status: 'prohibited', description: 'Supplements not approved by FDA.', icon: '💊' },
      { id: 'wildlifeProducts', name: 'Wildlife Products', status: 'prohibited', description: 'Products from protected species are prohibited.', icon: '🦅' }
    ]
  },
  {
    countryCode: 'FR',
    countryName: 'France',
    flag: '🇫🇷',
    items: [
      { id: 'aerosols', name: 'Aerosols', status: 'limited', description: 'Limited quantities with proper packaging.', icon: '🧴' },
      { id: 'alcohol', name: 'Alcohol', status: 'limited', description: 'Limited quantities with proper documentation.', icon: '🍷' },
      { id: 'animals', name: 'Animals', status: 'prohibited', description: 'Live or preserved animals are prohibited.', icon: '🐄' },
      { id: 'art', name: 'Art and Antiquities', status: 'limited', description: 'Requires documentation and may be subject to duties.', icon: '🖼️' },
      { id: 'batteries', name: 'Batteries', status: 'limited', description: 'Lithium batteries have special restrictions.', icon: '🔋' },
      { id: 'counterfeit', name: 'Counterfeit Goods', status: 'prohibited', description: 'Fake luxury items are strictly prohibited.', icon: '🚫' },
      { id: 'drugs', name: 'Drugs', status: 'prohibited', description: 'Illegal and prescription drugs are prohibited.', icon: '💊' },
      { id: 'electronics', name: 'Electronics', status: 'limited', description: 'Must comply with EU regulations.', icon: '💻' },
      { id: 'firearms', name: 'Firearms', status: 'prohibited', description: 'All firearms are prohibited without permits.', icon: '🔫' },
      { id: 'foieGras', name: 'Non-French Foie Gras', status: 'prohibited', description: 'Protected designation of origin applies.', icon: '🍽️' },
      { id: 'ivoryProducts', name: 'Ivory Products', status: 'prohibited', description: 'Banned under conservation laws.', icon: '🐘' },
      { id: 'knives', name: 'Combat Knives', status: 'prohibited', description: 'Weapons are strictly controlled.', icon: '🔪' },
      { id: 'perfume', name: 'Perfume', status: 'limited', description: 'Limited quantities due to alcohol content.', icon: '🧴' },
      { id: 'tobacco', name: 'Tobacco', status: 'limited', description: 'Limited quantities subject to taxation.', icon: '🚬' },
      { id: 'wine', name: 'Wine', status: 'limited', description: 'Limited quantities with proper documentation.', icon: '🍷' }
    ]
  },
  {
    countryCode: 'GB',
    countryName: 'United Kingdom',
    flag: '🇬🇧',
    items: [
      { id: 'agriculture', name: 'Agricultural Products', status: 'prohibited', description: 'Seeds, plants, and soil are prohibited.', icon: '🌱' },
      { id: 'alcohol', name: 'Alcohol', status: 'limited', description: 'Limited quantities subject to duty.', icon: '🍷' },
      { id: 'batteries', name: 'Lithium Batteries', status: 'limited', description: 'Special packaging requirements.', icon: '🔋' },
      { id: 'cheese', name: 'Dairy Products', status: 'prohibited', description: 'Most dairy products prohibited post-Brexit.', icon: '🧀' },
      { id: 'currency', name: 'Currency Over £10,000', status: 'prohibited', description: 'Must be declared.', icon: '💷' },
      { id: 'meat', name: 'Meat Products', status: 'prohibited', description: 'All meat products prohibited post-Brexit.', icon: '🥩' },
      { id: 'medicines', name: 'Medicines', status: 'limited', description: 'Personal use only with prescription.', icon: '💊' },
      { id: 'plants', name: 'Plants', status: 'prohibited', description: 'Live plants and seeds require permits.', icon: '🌱' },
      { id: 'tobacco', name: 'Tobacco', status: 'limited', description: 'Limited quantities subject to duty.', icon: '🚬' },
      { id: 'weapons', name: 'Weapons', status: 'prohibited', description: 'All weapons are prohibited.', icon: '⚔️' }
    ]
  }
];

const ProhibitedItems = () => {
  const [selectedCountry, setSelectedCountry] = useState('US');
  const [activeTab, setActiveTab] = useState<'all' | 'prohibited' | 'limited'>('all');
  
  const countryData = COUNTRY_RESTRICTIONS.find(country => country.countryCode === selectedCountry) || COUNTRY_RESTRICTIONS[1];
  
  const filteredItems = activeTab === 'all'
    ? countryData.items
    : countryData.items.filter(item => item.status === activeTab);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">Prohibited Items</h1>
        <p className="text-gray-300 mt-2">Learn what items are prohibited or limited when shipping to different countries.</p>
      </div>

      <Card className="bg-[#0D0F12] border-white/10 text-white">
        <CardHeader>
          <CardTitle>Select Destination Country</CardTitle>
          <CardDescription className="text-gray-400">
            Select the country you wish to ship items to and learn what is not allowed to be shipped.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Select
            value={selectedCountry}
            onValueChange={setSelectedCountry}
          >
            <SelectTrigger className="w-full md:w-80 bg-white/5 border-white/10 text-white">
              <SelectValue>
                <div className="flex items-center gap-2">
                  <span>{COUNTRY_RESTRICTIONS.find(c => c.countryCode === selectedCountry)?.flag}</span>
                  <span>{COUNTRY_RESTRICTIONS.find(c => c.countryCode === selectedCountry)?.countryName}</span>
                </div>
              </SelectValue>
            </SelectTrigger>
            <SelectContent className="bg-[#0D0F12] border-white/10 text-white">
              {COUNTRY_RESTRICTIONS.map((country) => (
                <SelectItem key={country.countryCode} value={country.countryCode} className="focus:bg-white/10 focus:text-white">
                  <div className="flex items-center gap-2">
                    <span>{country.flag}</span>
                    <span>{country.countryName}</span>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
      </Card>

      <div>
        <h2 className="text-xl font-semibold text-white mb-4">Prohibited and Limited Items</h2>
        
        <div className="flex items-center justify-between mb-6">
          <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as 'all' | 'prohibited' | 'limited')} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-white/5">
              <TabsTrigger value="all">All Items</TabsTrigger>
              <TabsTrigger value="prohibited">Prohibited</TabsTrigger>
              <TabsTrigger value="limited">Limited</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="mt-6">
          <p className="text-gray-300 text-sm mb-6">
            Laws vary by country. The list of items below cannot ship or have limits on how they can ship or how much can ship. 
            Please note that this list is not comprehensive and that restrictions are constantly changing.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item) => (
              <Card key={item.id} className="bg-[#0D0F12] border-white/10 text-white overflow-hidden">
                <div className="p-4 flex flex-col items-center text-center">
                  <div className={`flex items-center justify-center w-16 h-16 rounded-full mb-3 relative ${
                    item.status === 'prohibited' ? 'bg-red-500/10' : 'bg-yellow-500/10'
                  }`}>
                    <span className="text-3xl">{item.icon}</span>
                    {item.status === 'prohibited' && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full border-2 border-red-500 relative">
                          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-red-500 -rotate-45 transform origin-center"></div>
                        </div>
                      </div>
                    )}
                  </div>
                  <h3 className="font-medium text-white">{item.name}</h3>
                  <span className={`text-xs px-2 py-1 rounded-full mt-1 ${
                    item.status === 'prohibited' 
                      ? 'bg-red-500/20 text-red-400' 
                      : 'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {item.status === 'prohibited' ? 'Prohibited' : 'Limited'}
                  </span>
                </div>
                <Separator className="bg-white/5" />
                <div className="p-3">
                  <p className="text-xs text-gray-400">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      <Card className="bg-[#0D0F12] border-white/10 text-white">
        <CardHeader className="flex flex-row items-center gap-2">
          <Info className="h-5 w-5 text-blue-400" />
          <CardTitle className="text-lg">Important Information</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-gray-300">
            If you have concerns about your product, please contact our support team before you make your purchase.
            We'll do our best to update this page as we receive notices from our carriers, but ultimately you are responsible for
            ensuring that the items you purchase comply with all government and carrier restrictions.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <Ban className="h-5 w-5 text-red-400" />
            <span className="text-sm font-medium text-white">Prohibited items cannot ship at all.</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <AlertTriangle className="h-5 w-5 text-yellow-400" />
            <span className="text-sm font-medium text-white">Limited items have reduced shipping options and may require special documentation.</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProhibitedItems;

