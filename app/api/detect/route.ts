import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    const response = await fetch('https://serverless.roboflow.com/lumiares-workspace/workflows/detect-count-and-visualize', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        api_key: 'C5M2Skv7atL7TgYUz0tY',
        inputs: {
            "image": body.image
        }
    })
});

    const data = await response.json()

    console.log(data)

    return NextResponse.json(data)
  } catch (error) {
    console.error(error)
    return NextResponse.json(
      { error: error },
      { status: 500 }
    )
  }
}