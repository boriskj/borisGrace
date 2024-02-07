import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function App() {
  return (
    <>
      <Tabs defaultValue="account">
        <TabsList>
          <TabsTrigger value="account">ŽIVALI</TabsTrigger>
          <TabsTrigger value="password">SADJE</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="grid grid-cols-4 gap-3">
            <Card>
              <CardHeader>
                <CardTitle>SLON</CardTitle>
                <CardDescription>NA KRATKO</CardDescription>
              </CardHeader>
              <CardContent>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/African_Bush_Elephant.jpg/800px-African_Bush_Elephant.jpg"></img>
              </CardContent>
              <CardFooter>
                <Button className="w-full">več o slonu</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="password">
          <div className="grid grid-cols-4 gap-3">
            <Card>
              <CardHeader>
                <CardTitle>JABOLKO</CardTitle>
                <CardDescription>NA KRATKO</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  className="mb-10 rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Golden_delicious_apple.jpg/1280px-Golden_delicious_apple.jpg"
                ></img>
              </CardContent>
              <CardFooter>
                <Button className="w-full">več o jabolku</Button>
              </CardFooter>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>JABOLKO</CardTitle>
                <CardDescription>NA KRATKO</CardDescription>
              </CardHeader>
              <CardContent>
                <img
                  className="mb-10 rounded-lg"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Golden_delicious_apple.jpg/1280px-Golden_delicious_apple.jpg"
                ></img>
              </CardContent>
              <CardFooter>
                <Button className="w-full">več o jabolku</Button>
              </CardFooter>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </>
  );
}
