# MedikaLLInk Copilot V2 Wireframes

A complete redesign focused on **speed, clarity, and minimalism** for busy doctors. Voice-first. Touch-optimized. Zero cognitive overhead.

## Design Philosophy

Based on Steve Jobs design review feedback, this V2 redesign prioritizes:

1. **Command-Focused, Not Chat** - No conversation history, only current command
2. **Giant Touch Targets** - 80% width mic button, massive confirmation buttons
3. **Solution-First Errors** - Lead with the fix, not the problem
4. **Flatten Visual Hierarchy** - Remove 50% of borders, whitespace instead of boxes
5. **Smart Defaults** - Pre-highlighted matches, collapsed details

## Screens

| Screen | Route | Description |
|--------|-------|-------------|
| Main Panel | `/v2/copilot` | Giant mic button, single rotating hint |
| Confirmation | `/v2/confirm` | One-line decision, massive buttons |
| Disambiguation | `/v2/disambiguate` | Big cards, pre-highlighted match |
| Error Recovery | `/v2/error` | Headline is the action |
| Success State | `/v2/success` | Brief confirmation, auto-dismiss |

## Visual Specs

- **Primary**: `#4a90d9` (blue)
- **Success**: `#10b981` (green)
- **Error**: `#ef4444` (red)
- **Background**: `#ffffff`, `#f8fafc`
- **Text**: `#1e293b` (primary), `#64748b` (secondary)

### Typography
- Font: System UI stack
- Weights: 400 (normal), 500 (medium)
- Sizes: 14px (UI), 16px (content), 24px (headlines)

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the wireframes.

## Project Structure

```
app/
├── page.tsx                 # Landing page (V1 vs V2 comparison)
├── layout.tsx              # Root layout
├── globals.css             # Global styles
└── v2/
    ├── copilot/            # Main voice panel
    ├── confirm/            # Confirmation modal
    ├── disambiguate/       # Patient selection
    ├── error/              # Error recovery
    └── success/            # Success state
```

## Key Interactions

- **Mic button**: Tap to start listening, fades command after 3 seconds
- **Confirmation**: Tap "Show details" to expand, massive touch targets
- **Disambiguation**: Pre-highlighted best match (#1), full-width cards
- **Error**: Single action button, subtext explains context
- **Success**: Auto-dismiss progress bar, tap to dismiss early
