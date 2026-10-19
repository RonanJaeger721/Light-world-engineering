from pathlib import Path
p=Path('outputs/light-world-engineering/lib/content.ts');s=p.read_text();s=s.replace('      "solar-roof-technician",\n      "rooftop-solar-array",','      "rooftop-solar-array",\n      "solar-roof-technician",');p.write_text(s)
