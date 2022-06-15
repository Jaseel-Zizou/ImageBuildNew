/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react'
import { withRouter } from 'react-router';
import AccessLab from "./AccessLab"
import SplitPane from 'react-split-pane';
import Pane from 'react-split-pane/lib/Pane'
import CopyRight from "../pages/CopyRight";
import ImplementingEucEnvironment from "../pages/CoursePages/ImplementingEucEnvironment";

/** Configuring And Operating EUC Environments */
import Exercise_1_Task_1_InstallingAndConfiguringNutanixFileServer from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_1/Task_1_InstallingAndConfiguringNutanixFileServer";
import Exercise_1_Task_2_CreatingDistributedShare from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_1/Task_2_CreatingDistributedShare";
import Exercise_1_Task_3_MappingUserShare from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_1/Task_3_MappingUserShare";

import Exercise_2_Task_1_InstallingVda from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_2/Task_1_InstallingVda";
import Exercise_2_Task_2_OptimizingOperatingSystem from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_2/Task_2_OptimizingOperatingSystem";
import Exercise_2_Task_3_AddingGoldImage from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_2/Task_3_AddingGoldImage";
import Exercise_2_Task_4_AddingDeliveryGroup from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_2/Task_4_AddingDeliveryGroup";

import Exercise_3_Task_1_EnablingNutanixFlow from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_3/Task_1_EnablingNutanixFlow";
import Exercise_3_Task_2_AddingVmsToCategory from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_3/Task_2_AddingVmsToCategory";
import Exercise_3_Task_3_CreatingDesktopSecurityPolicy from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_3/Task_3_CreatingDesktopSecurityPolicy";
import Exercise_3_Task_4_VerifyingDesktopSecurity from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_3/Task_4_VerifyingDesktopSecurity";

import Exercise_4_Task_1_RecoveringFromFailure from "../pages/CoursePages/ConfiguringAndOperatingEucEnvironments/Exercise_4/Task_1_RecoveringFromFailure";

/** OptimizingAndTroubleshootingEucEnvironment */
import Exercise_1_ExploringDefaultAhvNetworkConfiguration from "../pages/CoursePages/OptimizingAndTroubleshootingEucEnvironment/Exercise_1_ExploringDefaultAhvNetworkConfiguration";
import Exercise_2_ManagingBridgesAndUplinks from "../pages/CoursePages/OptimizingAndTroubleshootingEucEnvironment/Exercise_2_ManagingBridgesAndUplinks";
import Exercise_3_ViewingOvsBridgesFromPrismElement from "../pages/CoursePages/OptimizingAndTroubleshootingEucEnvironment/Exercise_3_ViewingOvsBridgesFromPrismElement";
import Exercise_4_ConfiguringBondModeForTrafficLoadBalancing from "../pages/CoursePages/OptimizingAndTroubleshootingEucEnvironment/Exercise_4_ConfiguringBondModeForTrafficLoadBalancing";
import Exercise_5_ConfiguringVlan from "../pages/CoursePages/OptimizingAndTroubleshootingEucEnvironment/Exercise_5_ConfiguringVlan";
import Exercise_6_IncreasingCvmMemory from "../pages/CoursePages/OptimizingAndTroubleshootingEucEnvironment/Exercise_6_IncreasingCvmMemory";

import ManagingConfiguringAndOptimizingNutanixFrame from "../pages/CoursePages/ManagingConfiguringAndOptimizingNutanixFrame";

const components = {
   "CopyRight": <CopyRight />,
   "frame": <AccessLab />,
   "ImplementingEucEnvironment": <ImplementingEucEnvironment />,
   "Exercise_1_Task_1_InstallingAndConfiguringNutanixFileServer": <Exercise_1_Task_1_InstallingAndConfiguringNutanixFileServer />,
   "Exercise_1_Task_2_CreatingDistributedShare": <Exercise_1_Task_2_CreatingDistributedShare />,
   "Exercise_1_Task_3_MappingUserShare": <Exercise_1_Task_3_MappingUserShare />,

   "Exercise_2_Task_1_InstallingVda": <Exercise_2_Task_1_InstallingVda />,
   "Exercise_2_Task_2_OptimizingOperatingSystem": <Exercise_2_Task_2_OptimizingOperatingSystem />,
   "Exercise_2_Task_3_AddingGoldImage": <Exercise_2_Task_3_AddingGoldImage />,
   "Exercise_2_Task_4_AddingDeliveryGroup": <Exercise_2_Task_4_AddingDeliveryGroup />,

   "Exercise_3_Task_1_EnablingNutanixFlow": <Exercise_3_Task_1_EnablingNutanixFlow />,
   "Exercise_3_Task_2_AddingVmsToCategory": <Exercise_3_Task_2_AddingVmsToCategory />,
   "Exercise_3_Task_3_CreatingDesktopSecurityPolicy": <Exercise_3_Task_3_CreatingDesktopSecurityPolicy />,
   "Exercise_3_Task_4_VerifyingDesktopSecurity": <Exercise_3_Task_4_VerifyingDesktopSecurity />,

   "Exercise_4_Task_1_RecoveringFromFailure": <Exercise_4_Task_1_RecoveringFromFailure />,

   "ManagingConfiguringAndOptimizingNutanixFrame": <ManagingConfiguringAndOptimizingNutanixFrame />,
   "Exercise_1_ExploringDefaultAhvNetworkConfiguration": <Exercise_1_ExploringDefaultAhvNetworkConfiguration />,
   "Exercise_2_ManagingBridgesAndUplinks": <Exercise_2_ManagingBridgesAndUplinks />,
   "Exercise_3_ViewingOvsBridgesFromPrismElement": <Exercise_3_ViewingOvsBridgesFromPrismElement />,
   "Exercise_4_ConfiguringBondModeForTrafficLoadBalancing": <Exercise_4_ConfiguringBondModeForTrafficLoadBalancing />,
   "Exercise_5_ConfiguringVlan": <Exercise_5_ConfiguringVlan />,
   "Exercise_6_IncreasingCvmMemory": <Exercise_6_IncreasingCvmMemory />,
}

export class App extends Component {
   render() {
      return (
         <div>
            <SplitPane split="vertical">
               <Pane className="left-pane" initialSize="50%" minSize="30%" >
                  {components[this.props.id]}
               </Pane>
               <Pane className="right-pane" initialSize="50%" minSize="30%">
                  <div style={{ height: "100vh", minHeight: "100vh", overflow: "scroll", overflowX: "scroll", overflowY: "scroll" }}>
                     <iframe src="/Frame" title="frame" width="100%" height="100%" style={{ border: "none", marginRight: 0 }}></iframe>
                  </div>
               </Pane>
            </SplitPane>
         </div >
      )
   }
}

export default withRouter(App);
