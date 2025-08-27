import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Smart Contract Insurance AI",
    "one_liner": "Offer insurance premiums based on automated audit results of smart contracts.",
    "why_now": "Increased blockchain adoption necessitates security risk mitigation solutions.",
    "novel_mechanism": "Dynamic risk assessment using AI to adjust premiums in real-time based on contract behavior.",
    "ai_stack": [
      "GPT",
      "RAG",
      "Agents"
    ],
    "edge_use_cases": [
      "Automated insurance quotes",
      "Smart monitoring of contract performance"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Insurance risk model",
        "Audit integration",
        "Premium calculation engine"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe",
        "n8n"
      ],
      "data_bootstrap": [
        "public blockchain datasets",
        "synthetic contract behaviors"
      ],
      "risk": [
        "market adoption",
        "insurance regulation"
      ],
      "mitigation": [
        "partnerships with blockchain firms",
        "legal consultations"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Insurance savings stories",
        "Real-time risk demonstration"
      ],
      "channels": [
        "ProductHunt",
        "X",
        "Telegram"
      ],
      "pricing": {
        "free": "Basic contract audit",
        "pro": "Insurance premium calculator",
        "business": "Comprehensive contract monitoring"
      }
    },
    "moat": [
      "partnerships with insurance providers",
      "data-driven risk models",
      "integration with existing audit systems"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 7,
      "revenue_potential": 9,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "Combining insurance with smart contract audits adds a novel layer of value that incumbents lack."
  },
  {
    "title": "Crowdsourced Smart Contract Audit Platform",
    "one_liner": "Enable users to contribute to auditing in exchange for rewards.",
    "why_now": "Growing community engagement in blockchain calls for decentralized auditing.",
    "novel_mechanism": "Leveraging gamification to motivate community audits and validations.",
    "ai_stack": [
      "Claude",
      "RAG",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Crowd-validation of contract security",
      "Reward distribution for contributions"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Crowdsourcing framework",
        "Gamification mechanics",
        "Reward system"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe",
        "n8n"
      ],
      "data_bootstrap": [
        "public blockchain datasets",
        "user-contributed audit data"
      ],
      "risk": [
        "quality of audits",
        "user engagement"
      ],
      "mitigation": [
        "moderation tools",
        "incentives for quality contributions"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Success stories from crowd audits",
        "Community building initiatives"
      ],
      "channels": [
        "Reddit",
        "Discord",
        "Telegram"
      ],
      "pricing": {
        "free": "Basic participation",
        "pro": "Enhanced audit features",
        "business": "Enterprise access to crowd insights"
      }
    },
    "moat": [
      "active community participation",
      "reward systems fostering engagement",
      "intellectual property on audit results"
    ],
    "scores": {
      "novelty": 9,
      "72h_feasibility": 6,
      "revenue_potential": 8,
      "defensibility": 7
    },
    "total_score": 30,
    "reasoning": "Utilizing the crowd brings both scalability and incentivization that traditional audit firms cannot replicate."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}