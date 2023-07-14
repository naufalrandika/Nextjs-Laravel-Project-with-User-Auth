import AppLayout from '@/components/Layouts/AppLayout'
import Head from 'next/head'

const Dashboard = () => {
    return (
        <AppLayout
            header={
                <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                    Dashboard
                </h2>
            }>

            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            You're logged in!
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default Dashboard

// import { Metadata } from "next"
// import Image from "next/image"

// import { Button } from "@/components/ui/button"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/components/ui/tabs"

// import { MainNav } from "@/components/Dashboard/main-nav"
// // import { Overview } from "@/app/examples/dashboard/components/overview"
// // import { RecentSales } from "@/app/examples/dashboard/components/recent-sales"
// // import { Search } from "@/app/examples/dashboard/components/search"
// // import TeamSwitcher from "@/app/examples/dashboard/components/team-switcher"
// import { UserNav } from "@/components/Dashboard/user-nav"

// export const metadata: Metadata = {
//   title: "Dashboard",
//   description: "Example dashboard app using the components.",
// }

// export default function DashboardPage() {
//   return (
//     <>
//       <div className="md:hidden">
//         <Image
//           src="/examples/dashboard-light.png"
//           width={1280}
//           height={866}
//           alt="Dashboard"
//           className="block dark:hidden"
//         />
//         <Image
//           src="/examples/dashboard-dark.png"
//           width={1280}
//           height={866}
//           alt="Dashboard"
//           className="hidden dark:block"
//         />
//       </div>
//       <div className="hidden flex-col md:flex">
//         <div className="border-b">
//           <div className="flex h-16 items-center px-4">
//             {/* <TeamSwitcher /> */}
//             <MainNav className="mx-6" />
//             <div className="ml-auto flex items-center space-x-4">
//               {/* <Search /> */}
//               <UserNav />
//             </div>
//           </div>
//         </div>
//         <div className="flex-1 space-y-4 p-8 pt-6">
//           <div className="flex items-center justify-between space-y-2">
//             <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
//             <div className="flex items-center space-x-2">
              
//               <Button>Download</Button>
//             </div>
//           </div>
//           <Tabs defaultValue="overview" className="space-y-4">
//             <TabsList>
//               <TabsTrigger value="overview">Overview</TabsTrigger>
//               <TabsTrigger value="analytics" disabled>
//                 Analytics
//               </TabsTrigger>
//               <TabsTrigger value="reports" disabled>
//                 Reports
//               </TabsTrigger>
//               <TabsTrigger value="notifications" disabled>
//                 Notifications
//               </TabsTrigger>
//             </TabsList>
//           </Tabs>
//         </div>
//       </div>
//     </>
//   )
// }