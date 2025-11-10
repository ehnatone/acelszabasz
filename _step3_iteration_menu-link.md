# Step 3: Planning Iteration

## Iteration 1: Self-Critique

### Survey Completeness
Q: Did I search enough in Step 1?
A: Yes; inspected header file directly.
Additional survey: none needed.

### Pattern Adherence
Q: Am I following existing patterns EXACTLY?
A: Need to mirror class names and structure in both desktop/mobile lists; ensure new item falls in fifth position without disrupting order.
Adjustments: Place new link before `Kapcsolat` so order becomes Rólam, Szolgáltatások, Galéria, Szolgáltatás szerinti galéria, Kapcsolat.

### Real vs Invented
Real: Existing styling, use of `Link`, `onClick` close handler.
Invented: Label text.
Actions: Align label with new page heading "Galéria" plus descriptor to remain concise—choose "Galéria szolgáltatásonként".

### Assumptions Check
Assumptions: Menu expects section hash vs route—verify other items use routes (they do). No additional behavior triggered.
Verification: Confirm `href` values currently absolute paths (`/rolam`, etc.), so new route alignment consistent.

### Better Patterns?
No alternative pattern observed; duplication acceptable per minimal change approach.

### Pattern Consistency
Current pattern usage: 4 items; new addition preserves `hover:text-blue-300` in desktop and `border-b` classes in mobile for items except last.
Risk of breaking consistency: Low with mirrored structure.

### Updated Plan v1
- Add desktop `<li>` before Kapcsolat with label "Galéria szolgáltatásonként" linking to `/galeria-szolgaltatasok`.
- Add mobile `<li>` in same location with `border-b` to keep separators; leave Kapcsolat without border as currently.

Iteration 1 complete. Confidence: MEDIUM.

---

## Iteration 2: Failure Analysis

### Failure Scenarios
1. Typo in route path causing 404.
   - Probability: Low.
   - Impact: Broken navigation.
   - Prevention: Copy exact folder name `galeria-szolgaltatasok`.
2. Mobile menu not closing after click.
   - Probability: Medium if handler omitted.
   - Impact: UX issue.
   - Prevention: Include `onClick={() => setIsOpen(false)}`.

### Integration Risks
Only `Header` component touched; ensure import list unaffected.

### Type Safety
No types impacted; still valid.

### Pattern Review
No change to pattern; consistent with existing code.

### Updated Plan v2
Plan unchanged beyond ensuring correct accenting in label using Unicode characters.

Iteration 2 complete. Confidence: HIGH.

---

## Iteration 3: Final Validation

### Pre-Flight Checklist
- [x] Survey sufficient
- [x] Pattern adherence
- [x] Minimal change
- [x] All required files identified
- [x] Label confirmed
- [x] Route path verified
- [x] Mobile behavior accounted for
- [x] Desktop spacing preserved
- [x] Testing approach ready
- [x] Production ready

### Confidence
Level: HIGH

### Remaining Risks
Minor: text length may wrap on narrow desktop screens—acceptable given instructions.

### Final Implementation Steps
1. Update desktop nav list with new item before Kapcsolat.
2. Update mobile nav list correspondingly.
3. Run `npm run lint`.
4. Run `npm run build` (quick verification).

## Status
READY - proceed to Step 4

