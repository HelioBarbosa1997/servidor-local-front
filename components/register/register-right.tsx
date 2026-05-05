"use client"
import { useState } from "react"
import { Button } from "../ui/button"
import { Card, CardContent, CardHeader } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import Link from "next/link"
import { toast } from "sonner"



export const RegisterRight = () => {

    const [name, setName] = useState("")
    const [identificationNumber, setIdentificationNumber] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [email, setEmail] = useState("")
    const [telephone, setTelephone] = useState("")
    const [country, setCountry] = useState("")
    const [locality, setLocality] = useState("")
    const [password, setPassword] = useState("")
    const [enabled, setEnabled] = useState("")

    const changeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setName(e.target.value)
        } else {
            setName("")
        }
    };
    const changeIdentificationNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setIdentificationNumber(e.target.value)
        } else {
            setIdentificationNumber("")
        }
    };
    const changeDateOfBirth = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setDateOfBirth(e.target.value)
        } else {
            setDateOfBirth("")
        }
    };
    const changeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value)
        } else {
            setEmail("")
        }
    };
    const changeTelephone = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setTelephone(e.target.value)
        } else {
            setTelephone("")
        }
    };
    const changeCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setCountry(e.target.value)
        } else {
            setCountry("")
        }
    };
    const changeLocality = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setLocality(e.target.value)
        } else {
            setLocality("")
        }
    };
    const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setPassword(e.target.value)
        } else {
            setPassword("")
        }
    };

    const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        //fetch API
        const response = await fetch(
            'http://localhost:8080/user/create',
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    nome: name,
                    numero_identificacao: identificationNumber,
                    data_nascimento: dateOfBirth,
                    email: email,
                    telefone: telephone,
                    pais: country,
                    localidade: locality,
                    password: password,
                    role: "cliente",
                    enabled: enabled
                })
            })
        if (response.status === 200) {
            toast.success("Utilizador criado com sucesso");

            if (typeof window !== "undefined") {
                window.location.href = "/login";
            }
        } else {
            toast.error("Nao foi possivel criar conta, tente novamente")
        }
    };

    console.log({ nome: name, numero_identificacao: identificationNumber, data_nascimento: dateOfBirth, email: email, telefone: telephone, pais: country, localidade: locality, password: password });


    return (
        <div className="w-1/2 flex flex-col justify-center">
            <Card className="h-full flex flex-col justify-center px-12 gap-14">
                <CardHeader>
                    <span className="text-5xl font-bold text-center">Register</span>
                </CardHeader>

                <CardContent>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <Label className="font-bold">name</Label>
                            <Input type="text" placeholder="name user" className="py-4 text-lg h-10"
                                value={name}
                                onChange={changeName} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold">identification number</Label>
                            <Input type="text" placeholder="identification number" className="py-4 text-lg h-10"
                                value={identificationNumber}
                                onChange={changeIdentificationNumber} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold">date of birth</Label>
                            <Input type="date" placeholder="date of birth" className="py-4 text-lg h-10"
                                value={dateOfBirth}
                                onChange={changeDateOfBirth} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold">email</Label>
                            <Input type="text" placeholder="example@gmail.com" className="py-4 text-lg h-10"
                                value={email}
                                onChange={changeEmail} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold">telephone</Label>
                            <Input type="text" placeholder="238 999 88 77" className="py-4 text-lg h-10"
                                value={telephone}
                                onChange={changeTelephone} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold">country</Label>
                            <Input type="text" placeholder="Cabo Verde" className="py-4 text-lg h-10"
                                value={country}
                                onChange={changeCountry} />
                        </div>

                        <div className="flex flex-col gap-2">
                            <Label className="font-bold">locality</Label>
                            <Input type="text" placeholder="Praia" className="py-4 text-lg h-10"
                                value={locality}
                                onChange={changeLocality} />
                        </div>

                        <div>
                            <Label className="font-bold">password</Label>
                            <Input type="password" placeholder="introduce password" className="py-4 text-lg h-10"
                                value={password}
                                onChange={changePassword} />
                        </div>

                        <Button onClick={handleRegister} className="bg-[#13A4EC] rounded-md text-white font-bold py-3 drop-shadow-lg drop-shadow-gray-200">Register
                        </Button>
                    </div>
                    <div className="flex justify-center gap-2 mt-4 text-sm">
                        <span>Already have an account?</span>
                        <Link href="/login" className="text-[#13A4EC] font-semibold">Sign In</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
} 
