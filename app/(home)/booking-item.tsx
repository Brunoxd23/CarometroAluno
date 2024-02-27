import { Card, CardContent } from "@/app/_components/ui/card";
import { Input } from "../_components/input";
import { Label } from "../_components/label";

function Booking() {
    return (

        <Card className="p-6">
            <CardContent className="pb-2">

                <h1 className="grid w-full p-6  max-w-sm items-center gap-1.5">Carômetro Aluno</h1>

                <div className="grid w-full p-2 max-w-sm items-center gap-1.5">
                <Label htmlFor="matricula">Matrícula</Label>
                <Input type="matricula" id="matricula" placeholder="Matrícula" />
                </div>

                <div className="grid p-2 w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="name">Nome</Label>
                <Input type="name" id="name" placeholder="Nome" />
                </div>
                
            </CardContent>

        </Card>
    );

    
}
 
export default Booking;