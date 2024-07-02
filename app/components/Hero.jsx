import Image from "next/image";
import React from "react";

function Hero() {
  return (
    // <div>
      <section class="bg-gray-50 flex items-center flex-col">
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex ">
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Manage Your Expense
              <strong class="font-extrabold text-primary sm:block">
                {" "}
                Control Your Money
              </strong>
            </h1>

            <p class="mt-4 sm:text-xl/relaxed">
              Start Creating your budget and save ton of money
            </p>

            <div class="mt-8 flex flex-wrap justify-center gap-4">
              <a
                class="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto"
                href="/sign-in"
              >
                Get Started
              </a>

             
            </div>
          </div>
        </div>
        <Image src={'/dashboard2.png'} alt="dashboard"
            width={1000}
            height={700}
            className="-mt-9 rounded-xl border-2"
        />
      </section>
    // </div>
  );
}

export default Hero;
