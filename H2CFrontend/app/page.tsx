import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search, Sprout, Leaf, FileText, RefreshCw } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="relative rounded-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-green-600 to-green-800 p-8 md:p-16">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Smart Farming Solutions for Modern Agriculture
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Get personalized crop recommendations, learn organic farming techniques, and discover government schemes
              to enhance your farming practices.
            </p>
            <div className="relative max-w-xl">
              <Input
                type="text"
                placeholder="Search for crops, techniques, or schemes..."
                className="pl-10 pr-4 py-6 rounded-lg w-full text-base"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">Search</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Access Cards */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Crop Recommendation Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Sprout className="mr-2 h-5 w-5 text-green-600" />
                Crop Recommendation
              </CardTitle>
              <CardDescription>Get AI-powered crop suggestions based on your farm conditions</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                Enter your soil type, location, and other details to receive personalized crop recommendations.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/crop-recommendation">Get Recommendations</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Organic Farming Guide Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <Leaf className="mr-2 h-5 w-5 text-green-600" />
                Organic Farming Guide
              </CardTitle>
              <CardDescription>Learn sustainable farming practices</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                Explore step-by-step guides on soil preparation, pest control, composting, and more.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/organic-farming">Explore Guides</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Government Schemes Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <FileText className="mr-2 h-5 w-5 text-green-600" />
                Government Schemes
              </CardTitle>
              <CardDescription>Discover subsidies and programs for farmers</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                Find and apply for government schemes and subsidies available for your region and crop type.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/government-schemes">View Schemes</Link>
              </Button>
            </CardFooter>
          </Card>

          {/* Crop Rotation Card */}
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="flex items-center">
                <RefreshCw className="mr-2 h-5 w-5 text-green-600" />
                Crop Rotation
              </CardTitle>
              <CardDescription>Plan your seasonal crop rotations</CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-sm text-muted-foreground">
                Use our interactive planner to create optimal crop rotation schedules for your farm.
              </p>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href="/crop-rotation">Plan Rotation</Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Featured Content */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Featured Content</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Seasonal Farming Tips</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Discover the best practices for the current season to maximize your yield.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Success Stories</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Learn from farmers who have successfully implemented modern farming techniques.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Market Trends</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Stay updated with the latest market trends and pricing information for various crops.</p>
            </CardContent>
            <CardFooter>
              <Button variant="outline" className="w-full">
                Read More
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-muted rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Join Our Farming Community</h2>
        <p className="mb-6 max-w-2xl mx-auto">
          Connect with other farmers, share your experiences, and get expert advice on various farming topics.
        </p>
        <Button size="lg">Sign Up Now</Button>
      </section>
    </div>
  )
}

