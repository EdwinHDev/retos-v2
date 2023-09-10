import { Skeleton } from "@nextui-org/react";

export default function LoadingRetosHomeList() {
  return (
    <>
      <div className="mb-4 flex justify-between">
        <Skeleton className="rounded-lg w-2/4 bg-white border dark:border-none shadow dark:bg-zinc-900">
          <div className="h-10 rounded-lg bg-default-300 w-full"></div>
        </Skeleton>
        <Skeleton className="rounded-lg w-1/6 bg-white border dark:border-none shadow dark:bg-zinc-900">
          <div className="h-10 rounded-lg bg-default-300 w-full"></div>
        </Skeleton>
      </div>
      <div className="bg-white border dark:border-none shadow dark:bg-zinc-900 p-4 rounded-2xl overflow-hidden w-full">
        <Skeleton className="rounded-lg w-full">
          <div className="h-10 rounded-lg bg-default-300 w-full"></div>
        </Skeleton>
        <div className="flex justify-between gap-2 p-4 w-full">
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="mt-2 flex flex-col gap-1">
              <Skeleton className="h-4 w-28 rounded-xl">
                <div className="rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="h-3 w-20 rounded-xl">
                <div className="rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <Skeleton className="h-4 w-28 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="h-3 w-20 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <Skeleton className="h-6 w-20 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <Skeleton className="h-4 w-40 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-2 flex gap-1">
            <Skeleton className="h-8 w-8 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="h-8 w-8 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="h-8 w-8 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>

        <div className="flex justify-between gap-2 px-4 w-full">
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="mt-2 flex flex-col gap-1">
              <Skeleton className="h-4 w-28 rounded-xl">
                <div className="rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="h-3 w-20 rounded-xl">
                <div className="rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <Skeleton className="h-4 w-28 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="h-3 w-20 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <Skeleton className="h-6 w-20 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <Skeleton className="h-4 w-40 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-2 flex gap-1">
            <Skeleton className="h-8 w-8 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="h-8 w-8 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="h-8 w-8 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>

        <div className="flex justify-between gap-2 px-4 mt-4 w-full">
          <div className="flex gap-2">
            <Skeleton className="h-10 w-10 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <div className="mt-2 flex flex-col gap-1">
              <Skeleton className="h-4 w-28 rounded-xl">
                <div className="rounded-lg bg-default-300"></div>
              </Skeleton>
              <Skeleton className="h-3 w-20 rounded-xl">
                <div className="rounded-lg bg-default-300"></div>
              </Skeleton>
            </div>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <Skeleton className="h-4 w-28 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="h-3 w-20 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <Skeleton className="h-6 w-20 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-2 flex flex-col gap-1">
            <Skeleton className="h-4 w-40 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
          <div className="mt-2 flex gap-1">
            <Skeleton className="h-8 w-8 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="h-8 w-8 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
            <Skeleton className="h-8 w-8 rounded-xl">
              <div className="rounded-lg bg-default-300"></div>
            </Skeleton>
          </div>
        </div>
      </div>
    </>
  )
}
