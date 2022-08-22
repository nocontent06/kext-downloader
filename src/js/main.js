
let AirportBrcmFixup = document.getElementById("AirportBrcmFixup")
let selKext;
let selKextV;
function onChangeUpdate()
{
    document.getElementById("AirportBrcmFixupTable").style.display ="none"
    document.getElementById("AppleALCTable").style.display ="none"
    document.getElementById("BT4LEContinuityFixupTable").style.display = "none"
    document.getElementById("BrcmPatchRAMTable").style.display = "none"
    document.getElementById("BrightnessKeysTable").style.display = "none"
    document.getElementById("CPUFriendTable").style.display = "none"
    document.getElementById("CPUTopologySyncTable").style.display = "none"
    document.getElementById("CPUTscSyncTable").style.display = "none"
    document.getElementById("DebugEnhancerTable").style.display = "none"
    document.getElementById("ECEnablerTable").style.display = "none"
    document.getElementById("FeatureUnlockTable").style.display = "none"
    document.getElementById("HibernationFixupTable").style.display = "none"
    document.getElementById("IntelBluetoothFirmwareTable").style.display = "none"
    document.getElementById("IntelMausiTable").style.display = "none"
    document.getElementById("LiluTable").style.display = "none"
    document.getElementById("MacHyperVSupportTable").style.display = "none"
    document.getElementById("NVMeFixTable").style.display = "none"
    document.getElementById("NoTouchIDTable").style.display = "none"
    document.getElementById("RTCMemoryFixupTable").style.display = "none"
    document.getElementById("RealtekRTL8111Table").style.display = "none"
    document.getElementById("RestrictEventsTable").style.display = "none"
    document.getElementById("UEFIGraphicsFBTable").style.display = "none"
    document.getElementById("VirtualSMCTable").style.display = "none"
    document.getElementById("VoodooI2CTable").style.display = "none"
    document.getElementById("VoodooInputTable").style.display = "none"
    document.getElementById("VoodooPS2Table").style.display = "none"
    document.getElementById("VoodooPS2-AlpsTable").style.display = "none"
    document.getElementById("VoodooRMITable").style.display = "none"
    document.getElementById("WhateverGreenTable").style.display = "none"
    document.getElementById("OpenCorePkgTable").style.display = "none"



    selKext = document.getElementById("select_kext")
    selKextV = selKext.value;
    console.warn(selKextV)
}

function onChangeBranche()
{
    document.getElementById("AirportBrcmFixupTable").style.display ="none"
    document.getElementById("AppleALCTable").style.display ="none"
    document.getElementById("BT4LEContinuityFixupTable").style.display = "none"
    document.getElementById("BrcmPatchRAMTable").style.display = "none"
    document.getElementById("BrightnessKeysTable").style.display = "none"
    document.getElementById("CPUFriendTable").style.display = "none"
    document.getElementById("CPUTopologySyncTable").style.display = "none"
    document.getElementById("CPUTscSyncTable").style.display = "none"
    document.getElementById("DebugEnhancerTable").style.display = "none"
    document.getElementById("ECEnablerTable").style.display = "none"
    document.getElementById("FeatureUnlockTable").style.display = "none"
    document.getElementById("HibernationFixupTable").style.display = "none"
    document.getElementById("IntelBluetoothFirmwareTable").style.display = "none"
    document.getElementById("IntelMausiTable").style.display = "none"
    document.getElementById("LiluTable").style.display = "none"
    document.getElementById("MacHyperVSupportTable").style.display = "none"
    document.getElementById("NVMeFixTable").style.display = "none"
    document.getElementById("NoTouchIDTable").style.display = "none"
    document.getElementById("RTCMemoryFixupTable").style.display = "none"
    document.getElementById("RealtekRTL8111Table").style.display = "none"
    document.getElementById("RestrictEventsTable").style.display = "none"
    document.getElementById("UEFIGraphicsFBTable").style.display = "none"
    document.getElementById("VirtualSMCTable").style.display = "none"
    document.getElementById("VoodooI2CTable").style.display = "none"
    document.getElementById("VoodooInputTable").style.display = "none"
    document.getElementById("VoodooPS2Table").style.display = "none"
    document.getElementById("VoodooPS2-AlpsTable").style.display = "none"
    document.getElementById("VoodooRMITable").style.display = "none"
    document.getElementById("WhateverGreenTable").style.display = "none"
    document.getElementById("OpenCorePkgTable").style.display = "none"





    // document.getElementById("ABFT217").style.display = "none"

    let selBranche = document.getElementById("select_branche")
    let selBrancheV = selBranche.value;
    console.warn(selBrancheV)
    ////////////////////////////////////////////////////////////////////////
    
    if (selKextV == "AirportBrcmFixup" && selBrancheV == "stable")
    {
        document.getElementById("AirportBrcmFixupTable").style.display = ""
        document.getElementById("ABFT217").style.display = "none"
    }
    if (selKextV == "AirportBrcmFixup" && selBrancheV == "beta")
    {
        document.getElementById("AirportBrcmFixupTable").style.display = ""
        document.getElementById("ABFT217").style.display = ""
    }

    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "AppleALC" && selBrancheV == "stable")
    {
        document.getElementById("AppleALCTable").style.display = ""
        document.getElementById("AALCT175").style.display = "none"
    }
    if (selKextV == "AppleALC" && selBrancheV == "beta")
    {
        document.getElementById("AppleALCTable").style.display = ""
        document.getElementById("AALCT175").style.display = ""
    }

    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "BT4LEContinuityFixup" && selBrancheV == "stable")
    {
        document.getElementById("BT4LEContinuityFixupTable").style.display = ""
        document.getElementById("BT4LECF116").style.display = "none"
    }
    if (selKextV == "BT4LEContinuityFixup" && selBrancheV == "beta")
    {
        document.getElementById("BT4LEContinuityFixupTable").style.display = ""
        document.getElementById("BT4LECF116").style.display = ""
    }

    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "BrcmPatchRAM" && selBrancheV == "stable")
    {
        document.getElementById("BrcmPatchRAMTable").style.display = ""
        document.getElementById("BPRAM264").style.display = "none"
    }
    if (selKextV == "BrcmPatchRAM" && selBrancheV == "beta")
    {
        document.getElementById("BrcmPatchRAMTable").style.display = ""
        document.getElementById("BPRAM264").style.display = ""
    }

    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "BrightnessKeys" && selBrancheV == "stable")
    {
        document.getElementById("BrightnessKeysTable").style.display = ""
        document.getElementById("BK103").style.display = "none"
    }
    if (selKextV == "BrightnessKeys" && selBrancheV == "beta")
    {
        document.getElementById("BrightnessKeysTable").style.display = ""
        document.getElementById("BK103").style.display = ""
    }

    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "CPUFriend" && selBrancheV == "stable")
    {
        document.getElementById("CPUFriendTable").style.display = ""
        document.getElementById("CF127").style.display = "none"
    }
    if (selKextV == "CPUFriend" && selBrancheV == "beta")
    {
        document.getElementById("CPUFriendTable").style.display = ""
        document.getElementById("CF127").style.display = ""
    }

    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "CpuTopologySync" && selBrancheV == "stable")
    {
        document.getElementById("CPUTopologySyncTable").style.display = ""
        document.getElementById("CTS101").style.display = "none"
    }
    if (selKextV == "CpuTopologySync" && selBrancheV == "beta")
    {
        document.getElementById("CPUTopologySyncTable").style.display = ""
        document.getElementById("CTS101").style.display = ""
    }
    
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "CpuTscSync" && selBrancheV == "stable")
    {
        document.getElementById("CPUTscSyncTable").style.display = ""
        document.getElementById("CTscS110").style.display = "none"
    }
    if (selKextV == "CpuTscSync" && selBrancheV == "beta")
    {
        document.getElementById("CPUTscSyncTable").style.display = ""
        document.getElementById("CTscS110").style.display = ""
    }
        
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "DebugEnhancer" && selBrancheV == "stable")
    {
        document.getElementById("DebugEnhancerTable").style.display = ""
        document.getElementById("DE108").style.display = "none"
    }
    if (selKextV == "DebugEnhancer" && selBrancheV == "beta")
    {
        document.getElementById("DebugEnhancerTable").style.display = ""
        document.getElementById("DE108").style.display = ""
    }
            
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "ECEnabler"){
        document.getElementById("val_beta").style.display = "none"
    }

    if (selKextV == "ECEnabler" && selBrancheV == "stable")
    {
        document.getElementById("ECEnablerTable").style.display = ""
        document.getElementById("ECE103").style.display = ""
        document.getElementById("val_beta").style.display = "none"
    }
                    
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "FeatureUnlock" && selBrancheV == "stable"){
        document.getElementById("FeatureUnlockTable").style.display = ""
        document.getElementById("FU110").style.display = "none"
    }

    if (selKextV == "FeatureUnlock" && selBrancheV == "beta")
    {
        document.getElementById("FeatureUnlockTable").style.display = ""
        document.getElementById("FU110").style.display = ""
    }
                        
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "HibernationFixup" && selBrancheV == "stable"){
        document.getElementById("HibernationFixupTable").style.display = ""
        document.getElementById("HF147").style.display = "none"
    }

    if (selKextV == "HibernationFixup" && selBrancheV == "beta")
    {
        document.getElementById("HibernationFixupTable").style.display = ""
        document.getElementById("HF147").style.display = ""
    }
                            
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "IntelBluetoothFirmware" && selBrancheV == "stable"){
        document.getElementById("IntelBluetoothFirmwareTable").style.display = ""
        document.getElementById("IBF220").style.display = "none"
    }

    if (selKextV == "IntelBluetoothFirmware" && selBrancheV == "beta")
    {
        document.getElementById("IntelBluetoothFirmwareTable").style.display = ""
        document.getElementById("IBF220").style.display = ""
    }   
                             
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "IntelMausi" && selBrancheV == "stable"){
        document.getElementById("IntelMausiTable").style.display = ""
        document.getElementById("IM108").style.display = "none"
    }

    if (selKextV == "IntelMausi" && selBrancheV == "beta")
    {
        document.getElementById("IntelMausiTable").style.display = ""
        document.getElementById("IM108").style.display = ""
    }
                                 
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "Lilu" && selBrancheV == "stable"){
        document.getElementById("LiluTable").style.display = ""
        document.getElementById("L163").style.display = "none"
    }

    if (selKextV == "Lilu" && selBrancheV == "beta")
    {
        document.getElementById("LiluTable").style.display = ""
        document.getElementById("L163").style.display = ""
    }
                                     
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "MacHyperVSupport" && selBrancheV == "stable"){
        document.getElementById("MacHyperVSupportTable").style.display = ""
        document.getElementById("MHVS091").style.display = "none"
    }

    if (selKextV == "MacHyperVSupport" && selBrancheV == "beta")
    {
        document.getElementById("MacHyperVSupportTable").style.display = ""
        document.getElementById("MHVS091").style.display = ""
    }

                                         
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "NVMeFix" && selBrancheV == "stable"){
        document.getElementById("NVMeFixTable").style.display = ""
        document.getElementById("NF111").style.display = "none"
    }

    if (selKextV == "NVMeFix" && selBrancheV == "beta")
    {
        document.getElementById("NVMeFixTable").style.display = ""
        document.getElementById("NF111").style.display = ""
    }

                                             
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "NoTouchID" && selBrancheV == "stable"){
        document.getElementById("NoTouchIDTable").style.display = ""
        document.getElementById("NTI104").style.display = "none"
    }

    if (selKextV == "NoTouchID" && selBrancheV == "beta")
    {
        document.getElementById("NoTouchIDTable").style.display = ""
        document.getElementById("NTI104").style.display = ""
    }
                                                 
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "RTCMemoryFixup" && selBrancheV == "stable"){
        document.getElementById("RTCMemoryFixupTable").style.display = ""
        document.getElementById("RMF108").style.display = "none"
    }

    if (selKextV == "RTCMemoryFixup" && selBrancheV == "beta")
    {
        document.getElementById("RTCMemoryFixupTable").style.display = ""
        document.getElementById("RMF108").style.display = ""
    }
                                                 
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "RealtekRTL8111" && selBrancheV == "stable"){
        document.getElementById("RealtekRTL8111Table").style.display = ""
        document.getElementById("RR8242").style.display = ""
        document.getElementById("RR8240").style.display = ""
    }
                                                 
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "RestrictEvents" && selBrancheV == "stable"){
        document.getElementById("RestrictEventsTable").style.display = ""
        document.getElementById("RE109").style.display = "none"
    }

    if (selKextV == "RestrictEvents" && selBrancheV == "beta")
    {
        document.getElementById("RestrictEventsTable").style.display = ""
        document.getElementById("RE109").style.display = ""
    }
                                                 
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "UEFIGraphicsFB" && selBrancheV == "stable"){
        document.getElementById("UEFIGraphicsFBTable").style.display = ""
        document.getElementById("UGF101").style.display = "none"
    }

    if (selKextV == "UEFIGraphicsFB" && selBrancheV == "beta")
    {
        document.getElementById("UEFIGraphicsFBTable").style.display = ""
        document.getElementById("UGF101").style.display = ""
    }
                                                 
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "VirtualSMC" && selBrancheV == "stable"){
        document.getElementById("VirtualSMCTable").style.display = ""
        document.getElementById("VS131").style.display = "none"
    }

    if (selKextV == "VirtualSMC" && selBrancheV == "beta")
    {
        document.getElementById("VirtualSMCTable").style.display = ""
        document.getElementById("VS131").style.display = ""
    }
                                                 
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "VoodooI2C" && selBrancheV == "stable"){
        document.getElementById("VoodooI2CTable").style.display = ""
        document.getElementById("VI227").style.display = "none"
    }

    if (selKextV == "VoodooI2C" && selBrancheV == "beta")
    {
        document.getElementById("VoodooI2CTable").style.display = ""
        document.getElementById("VI227").style.display = ""
    }
                                                 
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "VoodooInput" && selBrancheV == "stable"){
        document.getElementById("VoodooInputTable").style.display = ""
        document.getElementById("VI113").style.display = "none"
    }

    if (selKextV == "VoodooInput" && selBrancheV == "beta")
    {
        document.getElementById("VoodooInputTable").style.display = ""
        document.getElementById("VI113").style.display = ""
    }
                                                     
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "VoodooPS2" && selBrancheV == "stable"){
        document.getElementById("VoodooPS2Table").style.display = ""
        document.getElementById("VP2230").style.display = "none"
    }

    if (selKextV == "VoodooPS2" && selBrancheV == "beta")
    {
        document.getElementById("VoodooPS2Table").style.display = ""
        document.getElementById("VP2230").style.display = ""
    }
                                                     
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "VoodooPS2-Alps" && selBrancheV == "stable"){
        document.getElementById("VoodooPS2-AlpsTable").style.display = ""
        document.getElementById("VP2A10").style.display = ""
    }
                                                     
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "VoodooRMI" && selBrancheV == "stable"){
        document.getElementById("VoodooRMITable").style.display = ""
        document.getElementById("VR135").style.display = "none"
    }

    if (selKextV == "VoodooRMI" && selBrancheV == "beta")
    {
        document.getElementById("VoodooRMITable").style.display = ""
        document.getElementById("VR135").style.display = ""
    }
                                                         
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "WhateverGreen" && selBrancheV == "stable"){
        document.getElementById("WhateverGreenTable").style.display = ""
        document.getElementById("WEG162").style.display = "none"
    }

    if (selKextV == "WhateverGreen" && selBrancheV == "beta")
    {
        document.getElementById("WhateverGreenTable").style.display = ""
        document.getElementById("WEG162").style.display = ""
    }
                                                         
    ////////////////////////////////////////////////////////////////////////

    if (selKextV == "OpenCorePkg" && selBrancheV == "stable"){
        document.getElementById("OpenCorePkgTable").style.display = ""
        document.getElementById("OCP084").style.display = "none"
    }

    if (selKextV == "OpenCorePkg" && selBrancheV == "beta")
    {
        document.getElementById("OpenCorePkgTable").style.display = ""
        document.getElementById("OCP084").style.display = ""
    }

}

