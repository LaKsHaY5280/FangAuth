import LoginButton from "@/components/auth/LoginButton";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className=" h-full flex flex-col justify-center items-center bg-green-600 ">
      <div className=" space-y-6 text-center">
        <h1 className=" text-6xl font-semibold text-white drop-shadow-md">
          Fang Auth
        </h1>
        <p className=" text-lg text-white">
          Secure Account Dashboard with Real-Time Monitoring
        </p>
        <div>
          <LoginButton>
            <Button variant="secondary" size="lg">
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
