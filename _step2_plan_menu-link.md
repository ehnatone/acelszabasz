# Step 2: Implementation Planning

## Task
Add a fifth menu item in the header navigation that links to the new grouped gallery page `/galeria-szolgaltatasok`.

## Context from Step 1
- Key findings: Header navigation defined manually inside `components/Header/Header.tsx`; both desktop and mobile menus list links explicitly.
- Files: `components/Header/Header.tsx` only.
- Patterns: Links utilize `next/link`, uppercase red background styling, mobile menu closes on click.

## Environment
- Package manager: npm (from package-lock).
- Scripts: `npm run lint`, `npm run build` for validation (already known).
- Stack: Next.js 15 with React.

## Technical Analysis

### Existing Code Survey
Utilities: none beyond `useState` for menu toggle.
Types: implicit; simple React component.
Patterns: Desktop menu uses `<ul>` with `<li>` per link; mobile menu duplicates same list with `onClick={() => setIsOpen(false)}` to close drawer.

### Implementation Location
File: `components/Header/Header.tsx`.
Why: All nav links defined inline; adding fifth link requires editing both desktop and mobile `<ul>` blocks.

### Integration Points
- Insert new `<li>` in desktop nav after existing gallery (fourth) to maintain order, or append at end per request (fifth item overall).
- Insert matching `<li>` in mobile nav with same structure and close handler.
- Ensure label uses Hungarian accenting consistent with site copy (e.g., "Galéria szolgáltatásonként").

### Edge Cases
- Preserve menu close behavior in mobile view by retaining `onClick={() => setIsOpen(false)}` on new link.
- Maintain consistent spacing and border classes.

## Proposed Solution

### Approach
Manually append new `<li>` entries referencing `/galeria-szolgaltatasok` in both desktop and mobile menus, using a concise Hungarian label (e.g., "Szolgáltatás szerinti galéria"). Keep class names aligned with neighbors.

### Changes
1. `components/Header/Header.tsx` – add `<li>` containing `<Link href="/galeria-szolgaltatasok">` to desktop nav.
2. Same file – add corresponding `<li>` in mobile nav, with border styling to maintain zebra layout.

### Implementation Steps
1. Update desktop `<ul>` to include new list item with consistent `hover:text-blue-300` styling.
2. Update mobile `<ul>` to include new item (likely before Kapcsolat or appended before final item) with border and hover classes, ensuring `onClick` closes menu.
3. Run `npm run lint` to catch formatting issues.
4. Run `npm run build` to confirm successful compile (ensures no type errors).

## Risk Analysis
Risk: Duplicate long label causing layout issues on smaller desktops.
Impact: Text wrapping or overflow.
Mitigation: Choose concise label; verify alignment (e.g., "Szolgáltatás galéria").

Risk: Mobile nav missing border causing inconsistent styling.
Impact: Visual inconsistency.
Mitigation: Mirror surrounding `<li>` border classes.

## Trade-offs
**Option A:** Refactor nav links into shared array to avoid duplication.
- Pro: Less duplication long-term.
- Con: Larger change than requested; higher regression risk.

**Option B:** Minimal change adding new `<li>` in both lists.
- Pro: Quick, low risk.
- Con: Maintains duplication.

**Chosen:** B, to satisfy request with minimal footprint.

## Unknowns
- Exact Hungarian wording preference (choose succinct default aligning with new page title).

