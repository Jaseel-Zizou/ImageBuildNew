import { CheckSquare } from 'react-feather';

export const MENU_ITEMS = [
   { icon: CheckSquare, path: '/home/CopyRight', title: 'CopyRight', type: 'link' },
   { icon: CheckSquare, path: '/home/ImplementingEucEnvironment', title: 'Implementing EUC Environment', type: 'link' },
   {
      path: "/home", title: "Configuring and Operating EUC Environments", type: "sub", icon: CheckSquare,
      children: [
         {
            icon: CheckSquare, path: '/home/Exercise_1', title: 'Exercise 1', type: "sub",
            children: [
               { icon: CheckSquare, path: '/home/Exercise_1_Task_1_InstallingAndConfiguringNutanixFileServer', title: 'Task 1 : Installing And Configuring Nutanix File Server', type: 'link' },
               { icon: CheckSquare, path: '/home/Exercise_1_Task_2_CreatingDistributedShare', title: 'Task 2 : Creating Distributed Share', type: 'link' },
               { icon: CheckSquare, path: '/home/Exercise_1_Task_3_MappingUserShare', title: 'Task 3 : Mapping User Share', type: 'link' },
            ]
         },
         {
            icon: CheckSquare, path: '/home/Exercise_2', title: 'Exercise 2', type: "sub",
            children: [
               { icon: CheckSquare, path: '/home/Exercise_2_Task_1_InstallingVda', title: 'Task 1 : Installing Vda', type: 'link' },
               { icon: CheckSquare, path: '/home/Exercise_2_Task_2_OptimizingOperatingSystem', title: 'Task 2 : Optimizing Operating System', type: 'link' },
               { icon: CheckSquare, path: '/home/Exercise_2_Task_3_AddingGoldImage', title: 'Task 3 : Adding GoldImage', type: 'link' },
               { icon: CheckSquare, path: '/home/Exercise_2_Task_4_AddingDeliveryGroup', title: 'Task 4 : Adding Delivery Group', type: 'link' },
            ]
         },
         {
            icon: CheckSquare, path: '/home/Exercise_3', title: 'Exercise 3', type: "sub",
            children: [
               { icon: CheckSquare, path: '/home/Exercise_3_Task_1_EnablingNutanixFlow', title: 'Task 1 : Enabling Nutanix Flow', type: 'link' },
               { icon: CheckSquare, path: '/home/Exercise_3_Task_2_AddingVmsToCategory', title: 'Task 2 : AddingVmsToCategory', type: 'link' },
               { icon: CheckSquare, path: '/home/Exercise_3_Task_3_CreatingDesktopSecurityPolicy', title: 'Task 3 : CreatingDesktopSecurityPolicy', type: 'link' },
               { icon: CheckSquare, path: '/home/Exercise_3_Task_4_VerifyingDesktopSecurity', title: 'Task 4 : VerifyingDesktopSecurity', type: 'link' },
            ]
         },
         {
            icon: CheckSquare, path: '/home/Exercise_4', title: 'Exercise 4', type: "sub",
            children: [
               { icon: CheckSquare, path: '/home/Exercise_4_Task_1_RecoveringFromFailure', title: 'Task 1 : RecoveringFromFailure', type: 'link' },
            ]
         },
      ]
   },
   { icon: CheckSquare, path: '/home/ManagingConfiguringAndOptimizingNutanixFrame', title: 'Managing, Configuring, and Optimizing Nutanix Frame', type: 'link' },
   {
      path: "/home", title: "Optimizing and Troubleshooting EUC Environments", type: "sub", icon: CheckSquare,
      children: [
         { icon: CheckSquare, path: '/home/Exercise_1_ExploringDefaultAhvNetworkConfiguration', title: 'Exercise 1 : Exploring Default Ahv Network Configuration', type: 'link' },
         { icon: CheckSquare, path: '/home/Exercise_2_ManagingBridgesAndUplinks', title: 'Exercise 2 : Managing Bridges And Uplinks', type: 'link' },
         { icon: CheckSquare, path: '/home/Exercise_3_ViewingOvsBridgesFromPrismElement', title: 'Exercise 3 : Viewing Ovs Bridges From Prism Element', type: 'link' },
         { icon: CheckSquare, path: '/home/Exercise_4_ConfiguringBondModeForTrafficLoadBalancing', title: 'Exercise 4 : Configuring Bond Mode For Traffic Load Balancing', type: 'link' },
         { icon: CheckSquare, path: '/home/Exercise_5_ConfiguringVlan', title: 'Exercise 5 : Configuring VLAN', type: 'link' },
         { icon: CheckSquare, path: '/home/Exercise_6_IncreasingCvmMemory', title: 'Exercise 6 : Increasing CVM Memory', type: 'link' },
      ]
   },
]