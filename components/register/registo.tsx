"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"


export const Registo = () => {
    
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    return (
        <div className="w-full min-h-screen flex flex-col justify-center items-center">
            <Card className="w-full max-w-lg flex flex-col px-10 py-8 gap-8">
                <CardHeader>
                    <span className="text-5xl font-bold text-center">Register</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label className="font-bold">name</Label>
                            <Input type="text" placeholder="name user" className="py-4 text-lg h-10" />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold">email</Label>
                            <Input type="text" placeholder="example@gmail.com" className="py-4 text-lg h-10"/>
                        </div>

                        <div>
                            <Label className="font-bold">password</Label>
                            <Input type="password" placeholder="introduce password" className="py-4 text-lg h-10"/>
                        </div>

                        <Button className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-lg drop-shadow-gray-200">Register
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 