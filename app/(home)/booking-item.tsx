import { Card, CardContent } from "@/app/_components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../_components/avatar";

import { Input } from "../_components/input";
import { Label } from "../_components/label";


function Booking() {
    return (

<div className="flex justify-center items-center h-screen">
    <Card className="p-2 md:p-4 max-w-md md:max-w-lg">
        <CardContent className="pb-2">
            <h1 className="text-lg md:text-2xl mb-6 text-right">Carômetro Aluno</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
                <div>
                    <div className="mb-4">
                        <Label htmlFor="matricula">Matrícula</Label>
                        <Input type="text" id="matricula" placeholder="Matrícula" />
                    </div>
                    <div className="mb-4">
                        <Label htmlFor="name">Nome</Label>
                        <Input type="text" id="name" placeholder="Nome" />
                    </div>
                    <div className="mb-4" >
                        <Label htmlFor="curso">Curso</Label>
                        <Input type="text" id="curso" placeholder="Curso" />
                    </div>
                </div>
                <div className="flex justify-center">
                    <Avatar className="h-24 w-24 md:h-40 md:w-40">
                        <AvatarImage src="https://utfs.io/f/3bd228b5-8e39-44c2-8dbb-ec2064d972cb-12dp52.jpg" />
                        <AvatarFallback>A</AvatarFallback>
                    </Avatar>
                </div>
            </div>
        </CardContent>
    </Card>
</div>



    );

    
}
 
export default Booking;