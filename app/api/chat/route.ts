import {
  consumeStream,
  convertToModelMessages,
  streamText,
  UIMessage,
} from 'ai';

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const systemPrompt = `You are Wilson Mponzi's AI assistant on his personal brand website. You help visitors learn about Wilson's work as a web developer.

Key information about Wilson:
- Full name: Wilson Luoneko Mponzi
- Role: Web Developer
- Contact: wilsonmponzi10@gmail.com, +255 616 145 193, +255 749 900 863
- LinkedIn: Wilson Mponzi
- Specializes in: Frontend Development, React, Next.js, Responsive Design, UI/UX Implementation
- Experience: Senior Web Developer (Freelance, 2023-Present), Frontend Developer (2021-2023), Junior Web Developer (2020-2021)

Projects:
1. Gourmet Restaurant Website - Online reservations, menu showcase
2. Fashion Brand E-Commerce - Cart, filtering, checkout with Stripe
3. Real Estate Platform - Property listings with map integration
4. Fitness Tracking App - Workout plans and progress tracking
5. Corporate Portfolio Site - Business website with CMS
6. Social Media Dashboard - Analytics with real-time data

Be friendly, helpful, and professional. If asked about projects or skills, provide specific details from the list above.`;

  const prompt = convertToModelMessages([
    { id: 'system', role: 'system', parts: [{ type: 'text', text: systemPrompt }] },
    ...messages
  ]);

  const result = streamText({
    model: 'openai/gpt-4o-mini',
    prompt,
    abortSignal: req.signal,
    maxOutputTokens: 500,
  });

  return result.toUIMessageStreamResponse({
    consumeSseStream: consumeStream,
  });
}
