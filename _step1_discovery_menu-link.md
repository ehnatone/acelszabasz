# Step 1: Question Clarification & Discovery

## User Request
ok. now add a menu item too and wire it in as a fifth menu item.

## Discovery Questions (Answer via codebase survey)

### 1. What is the navigation/menu component in THIS codebase?
Search: `Get-ChildItem -Recurse -Include Header.tsx -File`
Result: Located `components/Header/Header.tsx` (already known header component).

### 2. Where does the menu configuration live? Dependencies?
Search: `Get-Content .\components\Header\Header.tsx`
Result: Navigation items defined inline within `Header` component; uses an array `navLinks` mapping to section IDs.

### 3. Current usage patterns?
Search: `Select-String -Path components\Header\Header.tsx -Pattern "navLinks"`
Result: Array of objects `{ label, href }` with four items currently rendered in navigation UI; menu button toggles mobile drawer.

### 4. Types/interfaces?
Search: `Select-String -Path components\Header\Header.tsx -Pattern "interface"`
Result: No explicit TypeScript interfaces for nav items; uses inferred types.

### 5. Similar implementations?
Search: `Get-ChildItem -Recurse -Include *.tsx -File | Select-String -Pattern "href="#galeria""`
Result: Links referencing `#galeria` present inside header navigation and hero buttons; indicates usage of section IDs.

### 6. What breaks if changed?
Search: `Select-String -Path components\Header\Header.tsx -Pattern "#galeria"`
Result: Existing nav item uses `href: "#galeria"`. Adding additional route link must account for new page `galeria-szolgaltatasok` (likely `/galeria-szolgaltatasok`). Ensure no section ID conflict.

### 7. Git history/context?
Search: `git log --all --grep="Header" --oneline | Select-Object -First 5`
Result: No relevant history surfaced (command produced no entries in prior attempts).

### 8. Task-specific questions
- Identify how many menu items currently exist (4) and how to add fifth.
- Determine desired href for new menu item pointing to `/galeria-szolgaltatasok` (new page using route, not hash).
- Verify mobile menu close behavior when clicking new link.
- Check styling for active classes requiring update.

---

## Survey Results
- Header navigation defined in `components/Header/Header.tsx` via `navLinks` array with labels referencing Hungarian sections (Kezdőlap, Rólam, Szolgáltatások, Galéria, Kapcsolat).
- Mobile and desktop menus both iterate over `navLinks` for link rendering.
- No central navigation config shared elsewhere.
- Existing nav uses hash links to sections within home page; new request implies adding route link to new gallery page (fifth item appended to array as `/galeria-szolgaltatasok`).

## Interpretation
User wants: Append a new menu item to the header navigation linking to the grouped gallery page, ensuring it appears as the fifth item.
Technical meaning: Update `navLinks` array to include new entry with label referencing service gallery and href `/galeria-szolgaltatasok` while preserving existing behavior for desktop and mobile menus.
Files affected: `components/Header/Header.tsx`.

## Sanity Check
✓ Request makes logical sense?
✓ No contradictions?
✓ Won't obviously break functionality?

## Discovery Complete
✓ Context from codebase (not assumptions)
✓ All questions answered
✓ Ready for Step 2

