"use client"

import Link from "next/link"

import { Button } from "@/components/ui/button"
import {
    Form, FormField, FormMessage
} from "@/components/ui/form"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import {generateToken} from "@/lib";
import {useRouter} from "next/navigation";

const formSchema = z.object({
    email: z.string().min(1, {
        message: "This field has to be filled." })
        .email("This is not a valid email."),
    password: z.string().min(3, {
        message: "Username must be at least 3 characters.",
    }),
})


export default function RegisterForm() {
    const router = useRouter()
    // 1. Define your form.
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    // 2. Define a submit handler.
    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        await generateToken(values);
        router.push('/dashboard')
    }

        return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
            <Card className="mx-auto max-w-sm">
                <CardHeader>
                    <CardTitle className="text-2xl">Register</CardTitle>
                    <CardDescription>
                        Enter your email below to register your account
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    {/*<div className="grid gap-4">*/}
                    {/*    <div className="grid grid-cols-2 gap-4">*/}
                    {/*        <div className="grid gap-2">*/}
                    {/*            <Label htmlFor="first-name">First name</Label>*/}
                    {/*            <Input id="first-name" placeholder="Max" required />*/}
                    {/*        </div>*/}
                    {/*        <div className="grid gap-2">*/}
                    {/*            <Label htmlFor="last-name">Last name</Label>*/}
                    {/*            <Input id="last-name" placeholder="Robinson" required />*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    <div className="grid gap-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <div className="grid gap-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="m@example.com" {...field}/>
                                    <FormMessage />

                                </div>)
                            } />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                            <div className="grid gap-2">
                                <div className="flex items-center">
                                    <Label htmlFor="password">Password</Label>
                                    {/*<Link href="#" className="ml-auto inline-block text-sm underline">*/}
                                    {/*    Forgot your password?*/}
                                    {/*</Link>*/}
                                </div>
                                <Input id="password" type="password" {...field}/>
                                <FormMessage />

                            </div>
                            )
                            } />
                        <Button type="submit" className="w-full">
                            Register
                        </Button>
                        <Button variant="outline" className="w-full">
                            Login with Google
                        </Button>
                    </div>
                    <div className="mt-4 text-center text-sm">
                        Already have an account?{" "}
                        <Link href="/login" className="underline">
                            Sign in
                        </Link>
                    </div>
                </CardContent>
            </Card>
            </form>
        </Form>
    );
}
