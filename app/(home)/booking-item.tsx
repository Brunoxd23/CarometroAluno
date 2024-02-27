import { Card, CardContent } from "@/app/_components/ui/card";
import { Input } from "../_components/input";
import { Label } from "../_components/label";

function Booking() {
    return (

        <Card className="p-6">
            <CardContent>
                <h1>Card</h1>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
                </div>
                
            </CardContent>

        </Card>
    );

    
}
 
export default Booking;