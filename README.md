# Hindi Voice AI Assistant - Base Mini App

Control your devices with Hindi voice commands, share and earn on Base.

## Features

- 🎤 **Voice Command Interface**: Speak Hindi commands to control your devices
- 📝 **Personalized Command Registry**: Create and manage custom Hindi voice commands
- 🤝 **Community Co-creation**: Propose, vote, and adopt community commands
- 🏆 **Onchain Badges**: Earn reputation through Basename badges
- 🔗 **Farcaster Integration**: Share commands as Frames and earn rewards

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Blockchain**: Base (L2 on Ethereum)
- **Wallet**: OnchainKit for identity and transactions
- **Social**: Farcaster Mini App SDK
- **Styling**: Tailwind CSS with BASE theme
- **Language**: TypeScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Create `.env.local` from `.env.local.example`:
```bash
cp .env.local.example .env.local
```

3. Add your OnchainKit API key to `.env.local`

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
app/
├── components/
│   ├── Providers.tsx           # OnchainKit & React Query providers
│   ├── VoiceCommandInterface.tsx  # Main voice input interface
│   ├── MyCommands.tsx          # Personal command management
│   ├── CommunityCommands.tsx   # Community proposals & voting
│   └── ProfileBadges.tsx       # User profile & badges
├── layout.tsx                  # Root layout with metadata
├── page.tsx                    # Main app with navigation
└── globals.css                 # BASE theme styles
```

## Key Features Implementation

### Voice Commands
- Real-time Hindi voice recognition
- Quick command shortcuts
- Custom command creation
- Device action mapping

### Community Features
- Command proposals and voting
- Trending and new command discovery
- Command adoption tracking
- Social sharing via Farcaster Frames

### Onchain Integration
- Basename identity display
- Badge minting and claiming
- Gasless transactions via Paymaster
- Wallet connection with OnchainKit

## BASE Theme

The app uses the BASE theme with:
- Dark blue background (#0a1929)
- Base blue accents (#0052ff)
- Light text (#e3f2fd)
- Rounded borders and smooth transitions

## Deployment

Deploy to Vercel or any Next.js hosting platform:

```bash
npm run build
npm start
```

## Environment Variables

- `NEXT_PUBLIC_ONCHAINKIT_API_KEY`: Your OnchainKit API key
- `NEXT_PUBLIC_CHAIN_ID`: Base chain ID (8453)
- `NEXT_PUBLIC_RPC_URL`: Base RPC endpoint

## Learn More

- [Base Documentation](https://docs.base.org)
- [OnchainKit Documentation](https://onchainkit.xyz)
- [Farcaster Mini Apps](https://miniapps.farcaster.xyz)
- [Next.js Documentation](https://nextjs.org/docs)

## License

MIT
