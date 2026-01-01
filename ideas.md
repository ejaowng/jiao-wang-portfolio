# Design Brainstorming for Jiao Wang Portfolio

## Goal
Create a professional personal website that positions Jiao Wang as an applied AI + telecom systems expert, suitable for senior engineering roles in AI Solution Engineering, Applied AI Engineering, and AI Architecture.

---

<response>
<probability>0.08</probability>
<text>

## Approach 1: Technical Brutalism

**Design Movement**: Neo-Brutalism meets Technical Documentation Aesthetic

**Core Principles**:
- Raw, unpolished authenticity that mirrors engineering mindset
- Information density over decorative elements
- Monospaced typography as primary visual language
- High-contrast, function-first layouts

**Color Philosophy**: 
Terminal-inspired palette with deep slate backgrounds (oklch(0.18 0.01 240)) and phosphor green accents (oklch(0.75 0.15 145)) for technical credibility. Warm amber (oklch(0.70 0.12 65)) for call-to-action elements, evoking system alerts and critical information. The emotional intent is trust through technical transparency.

**Layout Paradigm**: 
Asymmetric grid with deliberate misalignment—left-aligned content blocks with right-floating technical metadata panels. Content flows in vertical stacks with occasional horizontal rule breaks, mimicking terminal output and log files.

**Signature Elements**:
- Monospaced code blocks with syntax highlighting for project descriptions
- ASCII-art section dividers (e.g., `===`, `---`, `>>>`)
- Bordered containers with sharp corners (border-radius: 2px)

**Interaction Philosophy**: 
Minimal animations—instant state changes with subtle border color shifts. Hover states reveal additional technical metadata (commit hashes, timestamps, version numbers) as if inspecting system logs.

**Animation**: 
No easing curves—linear transitions only (100-150ms). Page transitions use instant cuts. Scroll-triggered content appears with a single-frame fade-in (opacity 0 → 1, no transform).

**Typography System**:
- Display: JetBrains Mono Bold (headings, navigation)
- Body: IBM Plex Mono Regular (paragraphs, lists)
- Accent: Space Mono (technical labels, metadata)
- Hierarchy: Size contrast (48px → 16px → 12px) with consistent line-height (1.4)

</text>
</response>

---

<response>
<probability>0.07</probability>
<text>

## Approach 2: Swiss Precision Engineering

**Design Movement**: International Typographic Style (Swiss Design) adapted for digital systems

**Core Principles**:
- Mathematical grid systems with golden ratio proportions
- Objective photography and data visualization
- Absolute clarity and readability
- Neutral presentation allowing content to dominate

**Color Philosophy**: 
Restrained palette anchored in cool neutrals—charcoal base (oklch(0.25 0.005 250)) with precise accent in cobalt blue (oklch(0.55 0.18 250)) representing precision and intelligence. Secondary accent in steel gray (oklch(0.65 0.01 250)) for hierarchy. Emotional intent: confidence through systematic order.

**Layout Paradigm**: 
Strict 12-column grid with mathematical spacing (8px base unit, scaling by Fibonacci: 8, 13, 21, 34, 55). Content aligned to baseline grid. Asymmetric balance with 2/3 - 1/3 column splits for text-image pairings.

**Signature Elements**:
- Sans-serif typography with extreme attention to kerning and leading
- Full-bleed photography with 16:9 aspect ratio locks
- Data visualizations using clean line graphs and bar charts
- Minimal color usage—information encoded through size and position

**Interaction Philosophy**: 
Purposeful micro-interactions that reinforce grid structure. Buttons expand along grid lines. Navigation transitions slide content along column boundaries. Every animation respects the underlying mathematical system.

**Animation**: 
Eased transitions using cubic-bezier(0.4, 0.0, 0.2, 1) for all motion (300ms standard). Content enters from grid positions (translate along X/Y axes). No rotation or skew—only orthogonal movement.

**Typography System**:
- Display: Helvetica Neue Bold (96px, tracking -0.02em)
- Subheading: Helvetica Neue Medium (24px, tracking 0)
- Body: Helvetica Neue Regular (16px, line-height 1.6)
- Caption: Helvetica Neue Light (12px, tracking 0.02em)

</text>
</response>

---

<response>
<probability>0.06</probability>
<text>

## Approach 3: Organic Modernism

**Design Movement**: Scandinavian Modernism with Biophilic Design principles

**Core Principles**:
- Natural material textures juxtaposed with clean geometry
- Warm minimalism—human-centered technology
- Breathing space and organic flow
- Subtle imperfection to avoid sterility

**Color Philosophy**: 
Earth-toned foundation with warm sand (oklch(0.88 0.02 85)) as primary background, paired with deep forest green (oklch(0.35 0.08 155)) for primary actions and rich terracotta (oklch(0.58 0.12 45)) for emphasis. Accent with soft sage (oklch(0.75 0.05 145)) for secondary elements. Emotional intent: approachability and human warmth within technical expertise.

**Layout Paradigm**: 
Fluid, organic sections with curved dividers between content blocks. Content containers use rounded corners (24px radius) and float with generous margins. Diagonal cuts and wave patterns separate major sections, creating visual rhythm without rigid grids.

**Signature Elements**:
- Soft shadows with multiple layers (0 2px 8px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.08))
- Textured backgrounds using subtle noise/grain overlays
- Rounded profile imagery with soft vignette effects
- Hand-drawn style iconography with slight irregularity

**Interaction Philosophy**: 
Gentle, organic animations that mimic natural motion—elements ease in with spring physics. Hover states create soft glows and subtle lifts. Scrolling reveals content with parallax effects suggesting depth and layering.

**Animation**: 
Spring-based easing (tension: 180, friction: 20) for all interactive elements (400-600ms). Entrance animations use combined fade + subtle scale (0.97 → 1.0). Parallax scrolling on hero sections with 0.3x speed differential.

**Typography System**:
- Display: Fraunces Variable (soft serif, 72px, weight 600)
- Heading: Inter Variable (sans-serif, 32px, weight 500)
- Body: Inter Variable (16px, weight 400, line-height 1.7)
- Accent: Instrument Serif (italic, for pull quotes and emphasis)

</text>
</response>

---

## Selected Approach: Organic Modernism

This approach best serves Jiao Wang's positioning as an applied AI expert who bridges technical depth with practical, human-centered solutions. The warm, approachable aesthetic differentiates from typical tech portfolios while maintaining professionalism suitable for senior engineering roles. The organic flow and natural textures suggest adaptability and innovation—key traits for AI solution engineering.

The design will emphasize:
- Warm earth tones to convey approachability
- Fluid layouts with curved dividers for visual interest
- Soft shadows and textured backgrounds for depth
- Spring-based animations for natural, engaging interactions
- Typography pairing (Fraunces + Inter) for both authority and readability
