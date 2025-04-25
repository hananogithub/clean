import Image from "next/image"
import Link from "next/link"
import { Check, Clock, FileCheck, Key, MessageCircle, Phone, Shield, Star, Users } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* ヘッダー */}
      <header className="sticky top-0 z-40 w-full border-b bg-background">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <Shield className="h-6 w-6 text-primary" />
            <span>クリーンパートナー</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              サービス特徴
            </Link>
            <Link href="#plans" className="text-sm font-medium hover:underline underline-offset-4">
              料金プラン
            </Link>
            <Link href="#flow" className="text-sm font-medium hover:underline underline-offset-4">
              導入の流れ
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              よくある質問
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact" className="hidden md:flex">
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                お問い合わせ
              </Button>
            </Link>
            <Link href="#contact">
              <Button className="gap-2">
                <MessageCircle className="h-4 w-4" />
                無料相談
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* ヒーローセクション */}
        <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
          <div className="container relative z-10 grid gap-8 md:grid-cols-2 md:gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                旅館・民泊専門の清掃パートナー
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                清掃に悩まない民泊運営を。
              </h1>
              <p className="text-muted-foreground md:text-xl">
                手間のかかる現場作業をお任せください。 写真報告・トラブル対応・システム連携で、清掃の"自動運用"を実現。
              </p>
              <div className="font-medium text-primary">📍都内中心・高稼働物件対応／運営者の右腕になります</div>
              <Button size="lg" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                無料相談はこちら
              </Button>
            </div>
            <div className="relative mx-auto aspect-video w-full max-w-lg overflow-hidden rounded-lg shadow-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="清潔に整えられた民泊の部屋"
                width={800}
                height={600}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </section>

        {/* 課題提示セクション */}
        <section className="py-16 bg-white">
          <div className="container">
            <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-12">
              こんなお悩みありませんか？
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                "毎回、清掃品質にバラつきがある",
                "担当スタッフの態度が悪く、クレームが増えた",
                "繁忙期や連泊対応で現場が回らない",
                "清掃内容の確認に時間がかかる",
                "物件が増えてきたが、清掃体制が追いつかない",
              ].map((problem, index) => (
                <Card key={index} className="border-2 border-muted">
                  <CardContent className="p-6 flex items-start gap-4">
                    <div className="rounded-full bg-red-100 p-2 text-red-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                        <path d="m15 9-6 6" />
                        <path d="m9 9 6 6" />
                      </svg>
                    </div>
                    <p className="font-medium">{problem}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* 解決策セクション */}
        <section id="features" className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
              私たちが、民泊・旅館の"清掃の悩み"を一括解決します
            </h2>
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
              旅館・民泊に特化した清掃サービスで、運営の効率化と品質向上を実現します
            </p>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="overflow-hidden">
                <div className="bg-primary h-2" />
                <CardContent className="p-6 pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Star className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">旅館・民泊に特化した清掃クオリティ</h3>
                  <p className="mt-2 text-muted-foreground">
                    初期は代表が現場対応、スタッフ教育を徹底。宿泊施設特有のニーズを理解したサービスを提供します。
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="bg-primary h-2" />
                <CardContent className="p-6 pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <FileCheck className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">写真付きチェック報告で見える化</h3>
                  <p className="mt-2 text-muted-foreground">
                    管理者・オーナーへの報告負担ゼロ。清掃完了後の状態を写真で確認でき、安心して次のゲストをお迎えできます。
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="bg-primary h-2" />
                <CardContent className="p-6 pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Key className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">スケジュール管理・鍵管理も一括対応</h3>
                  <p className="mt-2 text-muted-foreground">
                    運営管理者の「右腕」として機能します。予約状況に合わせた清掃スケジュール調整から鍵の受け渡しまで対応可能です。
                  </p>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="bg-primary h-2" />
                <CardContent className="p-6 pt-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-primary"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">協力会社とのシステム連携にも柔軟対応</h3>
                  <p className="mt-2 text-muted-foreground">
                    既存の自社システムをそのまま活用OK。様々な予約管理システムと連携し、シームレスな運用を実現します。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 実績セクション */}
        <section className="py-16 bg-blue-50">
          <div className="container">
            <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-12">
              導入先の声と実績
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="p-6">
                <blockquote className="space-y-2">
                  <p className="text-lg">
                    「清掃スタッフの対応に困っていたところ、今はスムーズに！
                    自分たちも管理拡大予定なので、全て任せたいです」
                  </p>
                  <footer className="text-sm text-muted-foreground">ー 民泊運営管理会社 A様</footer>
                </blockquote>
              </Card>
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-primary mb-2">0件</div>
                  <p className="text-sm text-muted-foreground">
                    清掃クレーム
                    <br />
                    (3ヶ月間)
                  </p>
                </Card>
                <Card className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-primary mb-2">100%</div>
                  <p className="text-sm text-muted-foreground">
                    写真報告
                    <br />
                    対応
                  </p>
                </Card>
                <Card className="p-6 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-primary mb-2">95%+</div>
                  <p className="text-sm text-muted-foreground">
                    スタッフ
                    <br />
                    稼働率
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* サービスプラン概要 */}
        <section id="plans" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-12">
              サービスプラン概要
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="overflow-hidden">
                <div className="bg-primary/70 p-4 text-center text-white">
                  <h3 className="text-xl font-bold">スタンダード</h3>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 text-center">
                    <span className="text-3xl font-bold">¥6,000</span>
                    <span className="text-muted-foreground">〜 / 回</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>清掃サービス</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>写真報告</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>消耗品チェック</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">お問い合わせ</Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden border-primary relative">
                <div className="absolute top-0 right-0 bg-primary text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  おすすめ
                </div>
                <div className="bg-primary p-4 text-center text-white">
                  <h3 className="text-xl font-bold">プレミアム</h3>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 text-center">
                    <span className="text-3xl font-bold">¥7,500</span>
                    <span className="text-muted-foreground">〜 / 回</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>スタンダードプランの全内容</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>備品補充</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>緊急対応</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>優先スケジュール</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">お問い合わせ</Button>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <div className="bg-primary/70 p-4 text-center text-white">
                  <h3 className="text-xl font-bold">カスタム</h3>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4 text-center">
                    <span className="text-3xl font-bold">要見積もり</span>
                  </div>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>大型物件対応</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>法人向けカスタマイズ</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>専属スタッフ配置</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>その他ご要望に応じて</span>
                    </li>
                  </ul>
                  <Button className="w-full mt-6">お問い合わせ</Button>
                </CardContent>
              </Card>
            </div>
            <div className="mt-8 text-center">
              <p className="text-lg font-medium">📦 初回トライアル：1物件 / 3回まで割引対応可！</p>
            </div>
          </div>
        </section>

        {/* 導入の流れ */}
        <section id="flow" className="py-16 bg-gradient-to-b from-white to-blue-50">
          <div className="container">
            <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-12">
              導入の流れ
            </h2>
            <div className="max-w-3xl mx-auto">
              <ol className="relative border-l border-primary/30">
                {[
                  {
                    title: "無料相談・お問い合わせ",
                    description: "お客様のニーズをヒアリングします。オンラインでも対面でも対応可能です。",
                    icon: <MessageCircle className="h-5 w-5" />,
                  },
                  {
                    title: "物件の情報共有・ヒアリング",
                    description: "物件の特徴や要望を詳しくお聞きし、最適なプランをご提案します。",
                    icon: <Users className="h-5 w-5" />,
                  },
                  {
                    title: "1件テスト清掃の実施",
                    description: "実際に1回清掃を行い、サービス品質をご確認いただきます。",
                    icon: <Check className="h-5 w-5" />,
                  },
                  {
                    title: "フィードバック→本契約",
                    description: "テスト清掃の結果を踏まえ、必要に応じて調整し、本契約へ進みます。",
                    icon: <FileCheck className="h-5 w-5" />,
                  },
                  {
                    title: "スタッフ手配＆運用開始",
                    description: "担当スタッフを決定し、定期的な清掃サービスを開始します。",
                    icon: <Clock className="h-5 w-5" />,
                  },
                ].map((step, index) => (
                  <li key={index} className="mb-10 ml-6">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                      {step.icon}
                    </span>
                    <h3 className="font-bold text-lg">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="py-16 bg-primary text-primary-foreground">
          <div className="container text-center">
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-4">
              清掃の悩みを、今日で終わらせませんか？
            </h2>
            <p className="mb-8 max-w-2xl mx-auto">まずは無料相談から。あなたの物件に最適な清掃プランをご提案します。</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" variant="secondary" className="gap-2">
                <MessageCircle className="h-4 w-4" />
                無料相談・トライアルはこちら
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="gap-2 bg-transparent text-white border-white hover:bg-white/10"
              >
                <Phone className="h-4 w-4" />
                お電話でのお問い合わせ
              </Button>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center text-sm">
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>LINEでも相談OK！</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                <span>最短3日〜対応可能です</span>
              </div>
            </div>
          </div>
        </section>

        {/* 代表メッセージ */}
        <section className="py-16 bg-blue-50">
          <div className="container">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-8 items-center">
              <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=160&width=160"
                  alt="代表写真"
                  width={160}
                  height={160}
                  className="object-cover"
                />
              </div>
              <div>
                <h2 className="text-xl font-bold mb-4">「現場を知っているからこそ、仕組みで解決できます」</h2>
                <p className="text-muted-foreground mb-4">
                  最初は自分自身が現場に入り、品質・効率・仕組み化まで対応。
                  どんなに忙しくても、オーナー・運営者様が安心できる清掃を提供します。
                </p>
                <p className="font-medium">― 清掃代行サービス代表 ○○ ○○</p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-16 bg-white">
          <div className="container">
            <h2 className="text-center text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl mb-12">
              よくある質問
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>スタッフは固定ですか？</AccordionTrigger>
                  <AccordionContent>
                    基本的に担当制で対応します。物件の特性を理解したスタッフが継続して清掃を行うことで、
                    高品質なサービスを維持します。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>リネンや備品も対応可能ですか？</AccordionTrigger>
                  <AccordionContent>
                    はい、オプションで対応可能です。リネン交換や消耗品の補充など、
                    お客様のニーズに合わせたサービスをご提供します。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>地方でも依頼できますか？</AccordionTrigger>
                  <AccordionContent>
                    現在は東京都内を中心に対応しておりますが、順次エリアを拡大予定です。
                    地方の物件については、個別にご相談ください。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>急な予約変更にも対応できますか？</AccordionTrigger>
                  <AccordionContent>
                    はい、可能な限り対応いたします。プレミアムプランでは緊急対応サービスも含まれており、
                    急な予約変更や追加清掃にも柔軟に対応します。
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>契約期間の縛りはありますか？</AccordionTrigger>
                  <AccordionContent>
                    基本的な契約期間は3ヶ月からとなりますが、トライアルプランでは期間の縛りなくサービスをお試しいただけます。
                    長期契約の場合は割引も適用可能ですので、お気軽にご相談ください。
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="border-t bg-background">
        <div className="container flex flex-col gap-6 py-8 md:flex-row md:items-center md:justify-between md:py-12">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 font-bold text-xl">
              <Shield className="h-6 w-6 text-primary" />
              <span>クリーンパートナー</span>
            </div>
            <p className="text-sm text-muted-foreground">旅館・民泊専門の清掃代行サービス</p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              サービス特徴
            </Link>
            <Link href="#plans" className="text-sm font-medium hover:underline underline-offset-4">
              料金プラン
            </Link>
            <Link href="#flow" className="text-sm font-medium hover:underline underline-offset-4">
              導入の流れ
            </Link>
            <Link href="#faq" className="text-sm font-medium hover:underline underline-offset-4">
              よくある質問
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="#contact">
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" />
                お問い合わせ
              </Button>
            </Link>
          </div>
        </div>
        <div className="container py-4 border-t">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} クリーンパートナー株式会社. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  )
}
