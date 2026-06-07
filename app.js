/* ==========================================================================
   1. GLOBAL ARCHITECTURE DEPLOYMENT INITIALIZATION
   ========================================================================== */
let systemActiveUserSessionRole = null;
let systemActiveUserDisplayName = "";
let currentLiveCameraMediaStream = null;

document.addEventListener('DOMContentLoaded', () => {
    if (window.lucide) {
        lucide.createIcons();
    }
    
    // Check and apply cached dark/light preferences instantly
    initializePersistentThemeEngine();
    
    // Core structural event listeners
    initializeAuthGateValidationTriggers();
    initializeNavigationDrawerInteractions();
    initializeViewPaneRouterRoutingSystem();
    
    // Background Chronology Coordinate Loops
    startSynchronizedChronologyEngine();
    
    // Inject preliminary system mock records
    triggerCourseCatalogBadgeCardRenderer('Tech');
});

/* ==========================================================================
   2. PERSISTENT CORES: THEME & PERSISTENCE
   ========================================================================== */
function initializePersistentThemeEngine() {
    const cachedSavedTheme = localStorage.getItem('abisinya-preferred-theme');
    const dynamicIconDisplayNode = document.getElementById('themeIconNode');
    const actionThemeButtonTrigger = document.getElementById('btnPaletteThemeSwitcher');

    if (cachedSavedTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        if (dynamicIconDisplayNode) dynamicIconDisplayNode.setAttribute('data-lucide', 'sun');
    } else {
        document.documentElement.removeAttribute('data-theme');
        if (dynamicIconDisplayNode) dynamicIconDisplayNode.setAttribute('data-lucide', 'moon');
    }
    if (window.lucide) lucide.createIcons();

    if (actionThemeButtonTrigger) {
        actionThemeButtonTrigger.addEventListener('click', () => {
            const stringCurrentActiveThemeAttribute = document.documentElement.getAttribute('data-theme');
            if (stringCurrentActiveThemeAttribute === 'dark') {
                document.documentElement.removeAttribute('data-theme');
                localStorage.setItem('abisinya-preferred-theme', 'light');
                dynamicIconDisplayNode.setAttribute('data-lucide', 'moon');
                writeLineToSecurityConsoleTerminal('[THEME ENGINE] Persistent theme context modified to: LIGHT.');
            } else {
                document.documentElement.setAttribute('data-theme', 'dark');
                localStorage.setItem('abisinya-preferred-theme', 'dark');
                dynamicIconDisplayNode.setAttribute('data-lucide', 'sun');
                writeLineToSecurityConsoleTerminal('[THEME ENGINE] Persistent theme context modified to: DARK.');
            }
            if (window.lucide) lucide.createIcons();
        });
    }
}

/* ==========================================================================
   3. AIRTIGHT SECURITY WALL: SECURITY AUTH GATEWAY CONSOLE
   ========================================================================== */
function initializeAuthGateValidationTriggers() {
    const triggerLoginBtnAction = document.getElementById('btnExecuteSecureLoginAction');
    
    if (triggerLoginBtnAction) {
        triggerLoginBtnAction.addEventListener('click', () => {
            const selectedTargetProfileRole = document.getElementById('inputAuthTargetRole').value;
            const inputEnteredUsernameString = document.getElementById('inputAuthUsername').value.trim();
            const inputEnteredPasswordString = document.getElementById('inputAuthPassword').value;

            if (!inputEnteredUsernameString || !inputEnteredPasswordString) {
                displayToastBannerIndicator('⚠️ Identity validation error: Input credentials prior to authentication handshake.');
                return;
            }

            // High priority security validation checkpoint mapping rules
            if (selectedTargetProfileRole === 'Admin' && inputEnteredPasswordString !== 'admin123') {
                displayToastBannerIndicator('❌ Authorization Denied: Invalid Security Token Credentials for Admin Clearance Strata.');
                return;
            }

            // Transition out security gate mask block
            systemActiveUserSessionRole = selectedTargetProfileRole;
            systemActiveUserDisplayName = inputEnteredUsernameString;
            
            document.getElementById('globalAuthenticationGateScreen').style.display = 'none';
            document.getElementById('mainProtectedApplicationShellChassis').style.display = 'flex';
            
            // Sync up user meta summary UI nodes elements
            document.getElementById('labelDashboardUserDisplayName').textContent = systemActiveUserDisplayName;
            document.getElementById('labelDashboardClearanceTag').textContent = `${systemActiveUserSessionRole} Profile`;
            document.getElementById('labelDashboardUserInitialBadge').textContent = systemActiveUserDisplayName.charAt(0).toUpperCase();
            
            // Sync settings panel selector context drop parameters
            document.getElementById('selectSettingsTierLevelSelector').value = systemActiveUserSessionRole;
            processSettingsAccountClearanceDowngradeUpgradeOverride();

            writeLineToSecurityConsoleTerminal(`[SECURITY SEED] Safe authentication handshake resolved for profile context: ${systemActiveUserSessionRole}`);
            
            // Trigger 5-Question Diagnostic Modal Onboarding
            triggerVocationalDiagnosticAssessmentSurveyModalFlow();
        });
    }

    // Global Secure Session Termination Exit click handler mechanics
    const globalLogoutActionBtn = document.getElementById('btnGlobalSecurityExitAction');
    if (globalLogoutActionBtn) {
        globalLogoutActionBtn.addEventListener('click', () => {
            terminateLiveCameraHardwareFeedsStream();
            systemActiveUserSessionRole = null;
            systemActiveUserDisplayName = "";
            
            document.getElementById('inputAuthUsername').value = "";
            document.getElementById('inputAuthPassword').value = "";
            
            document.getElementById('mainProtectedApplicationShellChassis').style.display = 'none';
            document.getElementById('globalAuthenticationGateScreen').style.display = 'flex';
            
            writeLineToSecurityConsoleTerminal('[SECURITY LOGOUT] Session tokens purged. Terminal interface routed back to main entry auth login wall.');
        });
    }
}

/* ==========================================================================
   4. MULTI-QUESTION DIAGNOSTIC SURVEY MATRIX (5 TRAJECTORIES)
   ========================================================================== */
const arrayDiagnosticSurveyQuestionnaireDatabase = [
    { q: "What is your primary technological or target business execution focus path?", options: ["Cloud Software Development", "Forex Margin Liquidity Risk Analysis", "Creative Visual Art / UI UX Design", "Advanced Quantum & Synthetic Physics Mechanics"] },
    { q: "Rate your previous functional deployment knowledge relative to this discipline architecture:", options: ["Absolute Novice Foundations Level", "Intermediate Applied Practical Exposure", "Advanced Architecture Optimization Capability"] },
    { q: "What is your target weekly learning allocation commitment structure metric?", options: ["Accelerated Sprint Focus (20+ Hours per week)", "Balanced Moderate Track (10-20 Hours per week)", "Flexible Variable Path Configuration"] },
    { q: "Which framework layout design parameter matches your study focus targets?", options: ["Interactive Live Video Classrooms Lectures", "Solo Modular Badge Project Compilations", "Deep System Analysis Audit Tracking Logs"] },
    { q: "What is the primary production deployment goal model for this credential?", options: ["Online Vocational Agency / Career Pivot", "Corporate Infrastructure Deployment Elevation", "Personal Research Competence Strategy Mastery"] }
];

let integerActiveSurveyIndexTrackerPosition = 0;
const arrayCapturedSurveySelectionsResponseVectors = [];

function triggerVocationalDiagnosticAssessmentSurveyModalFlow() {
    integerActiveSurveyIndexTrackerPosition = 0;
    arrayCapturedSurveySelectionsResponseVectors.length = 0;
    
    document.getElementById('modalSkillAssessmentOnboardingOverlay').style.display = 'flex';
    renderTargetOnboardingSurveyQuestionItemCardNode();
}

function renderTargetOnboardingSurveyQuestionItemCardNode() {
    const targetBodyWrapperBox = document.getElementById('containerDynamicSurveyQuestionBox');
    const labelProgressIndicator = document.getElementById('labelAssessmentProgressTracker');
    const buttonNextStepTriggerAction = document.getElementById('btnSubmitAssessmentSurveyAction');
    
    buttonNextStepTriggerAction.disabled = true;
    
    const currentQuestionItemObjectDataValue = arrayDiagnosticSurveyQuestionnaireDatabase[integerActiveSurveyIndexTrackerPosition];
    labelProgressIndicator.textContent = `Question ${integerActiveSurveyIndexTrackerPosition + 1} of ${arrayDiagnosticSurveyQuestionnaireDatabase.length}`;
    
    targetBodyWrapperBox.innerHTML = `
        <div class="survey-question-prompt">${currentQuestionItemObjectDataValue.q}</div>
        <div class="survey-options-vertical-stack" id="surveyOptionsChassisTargetRow"></div>
    `;
    
    const contextOptionsContainerRowBlock = document.getElementById('surveyOptionsChassisTargetRow');
    currentQuestionItemObjectDataValue.options.forEach((optionTextString, indexValue) => {
        const optionBtnRow = document.createElement('button');
        optionBtnRow.className = 'survey-option-row-btn';
        optionBtnRow.textContent = optionTextString;
        optionBtnRow.addEventListener('click', () => {
            document.querySelectorAll('.survey-option-row-btn').forEach(btn => btn.classList.remove('selected-option'));
            optionBtnRow.classList.add('selected-option');
            
            arrayCapturedSurveySelectionsResponseVectors[integerActiveSurveyIndexTrackerPosition] = optionTextString;
            buttonNextStepTriggerAction.disabled = false;
        });
        contextOptionsContainerRowBlock.appendChild(optionBtnRow);
    });
}

// Hook up diagnostic button steps sequence controller logic
const actionSurveyStepProgressBtnTrigger = document.getElementById('btnSubmitAssessmentSurveyAction');
if (actionSurveyStepProgressBtnTrigger) {
    actionSurveyStepProgressBtnTrigger.addEventListener('click', () => {
        if (integerActiveSurveyIndexTrackerPosition < arrayDiagnosticSurveyQuestionnaireDatabase.length - 1) {
            integerActiveSurveyIndexTrackerPosition++;
            renderTargetOnboardingSurveyQuestionItemCardNode();
        } else {
            document.getElementById('modalSkillAssessmentOnboardingOverlay').style.display = 'none';
            displayToastBannerIndicator(`🎯 Diagnostic processed! Custom priority path locked onto your chosen trajectory: ${arrayCapturedSurveySelectionsResponseVectors[0]}.`);
            writeLineToSecurityConsoleTerminal(`[DIAGNOSTICS FINALIZED] Track vector parameter values cached: ${JSON.stringify(arrayCapturedSurveySelectionsResponseVectors)}`);
            
            // Customize target content cards automatically based on question responses
            if (arrayCapturedSurveySelectionsResponseVectors[0].includes('Forex')) {
                triggerDepartmentFilter('Business');
            } else if (arrayCapturedSurveySelectionsResponseVectors[0].includes('Creative')) {
                triggerDepartmentFilter('Creative');
            } else {
                triggerDepartmentFilter('Tech');
            }
        }
    });
}

/* ==========================================================================
   5. CHRONOLOGY DECK SYSTEM: INTEGRATED DUAL CALENDARS ENGINE
   ========================================================================== */
function startSynchronizedChronologyEngine() {
    refreshDualCalendarReadoutDisplaysFields();
    setInterval(refreshDualCalendarReadoutDisplaysFields, 60000); // Check and re-align every 60 seconds
}

function refreshDualCalendarReadoutDisplaysFields() {
    const internalDateObjInstance = new Date();
    
    // 1. Gregorian Formatting Readouts Mapping Layouts
    const optionsGregorianStringFormatConfig = { year: 'numeric', month: 'long', day: 'numeric', weekday: 'short' };
    const stringFormattedGregorianOutputValue = internalDateObjInstance.toLocaleDateString('en-US', optionsGregorianStringFormatConfig);
    const elementGregorianFieldNode = document.getElementById('displayGregorianDateValueField');
    if (elementGregorianFieldNode) elementGregorianFieldNode.textContent = stringFormattedGregorianOutputValue;

    // 2. Ethiopian Calendar Algorithmic Chronology Mapping Calculation Models
    const elementEthiopianFieldNode = document.getElementById('displayEthiopianDateValueField');
    if (elementEthiopianFieldNode) {
        elementEthiopianFieldNode.textContent = calculateMockEthiopianChronologyCoordinateValueString(internalDateObjInstance);
    }
}

function calculateMockEthiopianChronologyCoordinateValueString(gregorianDateInstance) {
    let gregYear = gregorianDateInstance.getFullYear();
    let gregMonth = gregorianDateInstance.getMonth() + 1;
    let gregDay = gregorianDateInstance.getDate();

    // Standard baseline conversion logic offset calculations metrics
    let ethYear = gregYear - 8;
    if (gregMonth < 9 || (gregMonth === 9 && gregDay < 11)) {
        ethYear = gregYear - 9;
    }

    const arrayEthiopianMonthsReferenceTagsList = [
        "Meskerem", "Tikimt", "Hidar", "Tahsas", "Ter", "Yakatit", 
        "Megabit", "Miyazia", "Genbot", "Sene", "Hamle", "Nehase", "Pagume"
    ];

    // Simple robust operational approximation values calculations coordinates for dashboard viewports
    let calculatedEthMonthIndex = (gregMonth + 3) % 12;
    if (calculatedEthMonthIndex === 0) calculatedEthMonthIndex = 12;
    
    let calculatedEthDay = (gregDay + 10) % 30;
    if (calculatedEthDay === 0) calculatedEthDay = 30;

    if (gregMonth === 9 && gregDay >= 6 && gregDay <= 10) {
        return `Pagume ${gregDay - 5}, ${ethYear} ዓ.ም.`;
    }

    const stringReadableMonthName = arrayEthiopianMonthsReferenceTagsList[calculatedEthMonthIndex - 1] || "Meskerem";
    return `${stringReadableMonthName} ${calculatedEthDay}, ${ethYear} ዓ.ም.`;
}

/* ==========================================================================
   6. AUTOMATED DROP ROUTING HANDSHAKE NAVIGATION
   ========================================================================== */
function initializeViewPaneRouterRoutingSystem() {
    const listNavigationNodes = document.querySelectorAll('.sidebar .menu-list .menu-item');
    const labelHeaderTitleText = document.getElementById('workspaceViewHeaderLabel');

    listNavigationNodes.forEach(buttonNode => {
        buttonNode.addEventListener('click', () => {
            const stringTargetPaneViewId = buttonNode.getAttribute('data-pane');
            if (!stringTargetPaneViewId) return;

            listNavigationNodes.forEach(item => item.classList.remove('active'));
            buttonNode.classList.add('active');

            const arrayAllPortalPaneViews = document.querySelectorAll('.portal-pane-view');
            arrayAllPortalPaneViews.forEach(pane => pane.classList.remove('active-pane'));

            const targetElementDomViewPane = document.getElementById(stringTargetPaneViewId);
            if (targetElementDomViewPane) {
                targetElementDomViewPane.classList.add('active-pane');
                
                const elementTextLabelNode = buttonNode.querySelector('.menu-item-left');
                if (elementTextLabelNode) {
                    labelHeaderTitleText.textContent = elementTextLabelNode.textContent.trim();
                }
                closeMobileNavigationSidebarDrawerCurtain();
            }
        });
    });

    // Upgraded Academic Accordion Automatic Routing Trigger Engine Nodes Hooks
    const nestedCourseSubItemNodes = document.querySelectorAll('.nested-sub-item');
    nestedCourseSubItemNodes.forEach(subItemNode => {
        subItemNode.addEventListener('click', (event) => {
            event.stopPropagation();
            const targetDepartmentTokenStringKeyId = subItemNode.getAttribute('data-dept');
            
            // Route seamlessly back to Home view where catalog components are displayed
            const dashboardMainListItemNode = document.querySelector('[data-pane="paneHomeView"]');
            if (dashboardMainListItemNode) dashboardMainListItemNode.click();
            
            triggerDepartmentFilter(targetDepartmentTokenStringKeyId);
            closeMobileNavigationSidebarDrawerCurtain();
        });
    });
}

/* ==========================================================================
   7. SECURITY CONFIGURATIONS: GEAR ICON UTILITY MODULE PANE CONTROLLERS
   ========================================================================== */
const gearSettingsTriggerBtnNode = document.getElementById('btnTriggerSettingsPaneNavigation');
if (gearSettingsTriggerBtnNode) {
    gearSettingsTriggerBtnNode.addEventListener('click', () => {
        const targetSettingsPaneViewNode = document.getElementById('paneSettingsControlView');
        if (!targetSettingsPaneViewNode) return;

        document.querySelectorAll('.portal-pane-view').forEach(pane => pane.classList.remove('active-pane'));
        document.querySelectorAll('.sidebar .menu-list .menu-item').forEach(item => item.classList.remove('active'));
        
        targetSettingsPaneViewNode.classList.add('active-pane');
        document.getElementById('workspaceViewHeaderLabel').textContent = "Clearance Hub";
        closeMobileNavigationSidebarDrawerCurtain();
    });
}

function processSettingsAccountClearanceDowngradeUpgradeOverride() {
    const selectedClearanceValue = document.getElementById('selectSettingsTierLevelSelector').value;
    const feedbackTextBoxLabelNode = document.getElementById('panelSettingsClearanceMetaDescriptionBox');
    const adminMenuAnchorListItem = document.getElementById('sidebarAdminMenuAnchor');
    
    if (selectedClearanceValue === 'Admin') {
        adminMenuAnchorListItem.style.display = 'flex';
        feedbackTextBoxLabelNode.innerHTML = `<strong>⚠️ ROOT CLEARANCE ACTIVE:</strong> Master administrative structures, system injection modules, and terminal logs unlocked.`;
        writeLineToSecurityConsoleTerminal('[CLEARANCE CONFIG] Account authorization variables updated context to ROOT SYSTEM MASTER ADMINISTRATIVE.');
    } else if (selectedClearanceValue === 'Teacher') {
        adminMenuAnchorListItem.style.display = 'none';
        feedbackTextBoxLabelNode.innerHTML = `<strong>🎓 FACULTY CLEARANCE CONTEXT:</strong> Authorized execution patterns allowed for student trajectory reviews and lecture projections.`;
        writeLineToSecurityConsoleTerminal('[CLEARANCE CONFIG] Account authorization variables updated context to INSTRUCTOR LEVEL FACULTY.');
    } else {
        adminMenuAnchorListItem.style.display = 'none';
        feedbackTextBoxLabelNode.innerHTML = `<strong>👤 STUDENT ACCOUNT CLEARANCE:</strong> Active monitoring clocks running. Restrictive gateway access rules enforced.`;
        writeLineToSecurityConsoleTerminal('[CLEARANCE CONFIG] Account authorization variables returned parameters state to STUDENT ACCOUNT VIEW.');
    }
}

/* ==========================================================================
   8. REAL-TIME NATIVE ENVIRONMENT: CAMERA FLOWS AND CORE CONNECTION
   ========================================================================== */
const micButtonTriggerNode = document.getElementById('btnMeetToggleMic');
const camButtonTriggerNode = document.getElementById('btnMeetToggleCam');
const screenShareButtonTriggerNode = document.getElementById('btnMeetToggleShare');
const centerProfileNodeRingElement = document.getElementById('elementMeetProfileNode');
const htmlHardwareVideoTrackElementNode = document.getElementById('hardwareLiveCameraVideoTrackNode');

let booleanMicStateActive = false;
let booleanCamStateActive = false;

if (camButtonTriggerNode) {
    camButtonTriggerNode.addEventListener('click', async () => {
        booleanCamStateActive = !booleanCamStateActive;
        
        if (booleanCamStateActive) {
            try {
                // Request live hardware system camera permissions natively from user device media lines
                currentLiveCameraMediaStream = await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
                
                if (htmlHardwareVideoTrackElementNode) {
                    htmlHardwareVideoTrackElementNode.srcObject = currentLiveCameraMediaStream;
                    htmlHardwareVideoTrackElementNode.style.display = 'block';
                }
                if (centerProfileNodeRingElement) centerProfileNodeRingElement.style.display = 'none';
                
                camButtonTriggerNode.classList.add('disabled-state');
                writeLineToSecurityConsoleTerminal('[NATIVE HARDWARE OPN] Live device webcam stream links locked onto stream viewport target channels.');
            } catch (err) {
                console.warn("Hardware camera allocation error:", err);
                booleanCamStateActive = false;
                displayToastBannerIndicator("⚠️ Local camera peripheral link failed. Ensure secure connection context protocols (HTTPS) are active.");
            }
        } else {
            terminateLiveCameraHardwareFeedsStream();
        }
    });
}

if (micButtonTriggerNode) {
    micButtonTriggerNode.addEventListener('click', () => {
        booleanMicStateActive = !booleanMicStateActive;
        micButtonTriggerNode.classList.toggle('disabled-state', booleanMicStateActive);
        writeLineToSecurityConsoleTerminal(`[STREAM METRICS] Audio input trace status converted parameters matching: ${booleanMicStateActive}`);
    });
}

if (screenShareButtonTriggerNode) {
    screenShareButtonTriggerNode.addEventListener('click', () => {
        displayToastBannerIndicator("🖥️ Interactive system projection logic running. Local device layout matrices hooked to class stage channel.");
    });
}

function terminateLiveCameraHardwareFeedsStream() {
    if (currentLiveCameraMediaStream) {
        currentLiveCameraMediaStream.getTracks().forEach(trackItem => trackItem.stop());
        currentLiveCameraMediaStream = null;
    }
    if (htmlHardwareVideoTrackElementNode) {
        htmlHardwareVideoTrackElementNode.srcObject = null;
        htmlHardwareVideoTrackElementNode.style.display = 'none';
    }
    if (centerProfileNodeRingElement) centerProfileNodeRingElement.style.display = 'flex';
    if (camButtonTriggerNode) camButtonTriggerNode.classList.remove('disabled-state');
    
    booleanCamStateActive = false;
    writeLineToSecurityConsoleTerminal('[NATIVE HARDWARE CLS] Optical sensors safely disconnected from live application matrices.');
}

function switchVirtualBackground(stringTargetAssetUrlOrHexColor, booleanIsImageResourceFlag, thumbnailElementReference) {
    const elementStageCanvasWindow = document.getElementById('elementVirtualMeetStage');
    if (!elementStageCanvasWindow) return;

    document.querySelectorAll('.meet-backdrop-strip .backdrop-thumb').forEach(thumb => thumb.classList.remove('active-thumb'));
    if (thumbnailElementReference) thumbnailElementReference.classList.add('active-thumb');

    elementStageCanvasWindow.style.backgroundImage = 'none';
    elementStageCanvasWindow.style.backgroundColor = stringTargetAssetUrlOrHexColor;
    writeLineToSecurityConsoleTerminal('[VIRTUAL VIEWPORT] Core scenery background parameters altered safely.');
}

/* ==========================================================================
   9. SYNCHRONIZED CHAT FILE SHARING EXTENSIONS CORES
   ========================================================================== */
const inputLiveRoomChatFieldElement = document.getElementById('inputLiveRoomChatField');
const triggerSendChatActionBtnNode = document.getElementById('btnSendLiveRoomChatMsg');
const historyChatDisplayScrollAreaBox = document.getElementById('liveRoomChatScrollBox');

if (triggerSendChatActionBtnNode) {
    triggerSendChatActionBtnNode.addEventListener('click', processLiveRoomChatSubmissionPipeline);
}
if (inputLiveRoomChatFieldElement) {
    inputLiveRoomChatFieldElement.addEventListener('keydown', (e) => { if (e.key === 'Enter') processLiveRoomChatSubmissionPipeline(); });
}

function processLiveRoomChatSubmissionPipeline() {
    const stringRawMessageText = inputLiveRoomChatFieldElement.value.trim();
    if (!stringRawMessageText) return;

    appendRowItemLineIntoSynchronizedClassroomChatBox(`<strong>You:</strong> ${stringRawMessageText}`, false);
    inputLiveRoomChatFieldElement.value = '';

    setTimeout(() => {
        appendRowItemLineIntoSynchronizedClassroomChatBox(`<strong>System_Peer:</strong> Synchronization handshake tracked. Workspace parameters compiled.`, true);
    }, 1000);
}

function appendRowItemLineIntoSynchronizedClassroomChatBox(htmlContentStringMarkup, booleanIsSystemFlag) {
    const elementChatRowLineNode = document.createElement('div');
    elementChatRowLineNode.className = 'log-line';
    if (booleanIsSystemFlag) elementChatRowLineNode.style.color = 'var(--tg-blue)';
    elementChatRowLineNode.innerHTML = htmlContentStringMarkup;
    
    historyChatDisplayScrollAreaBox.appendChild(elementChatRowLineNode);
    historyChatDisplayScrollAreaBox.scrollTop = historyChatDisplayScrollAreaBox.scrollHeight;
}

// Media Sharing Tray Interactivity Handlers Logic
const chatMediaFileSharingSelectorInputNode = document.getElementById('inputChatMediaFileSharingNode');
if (chatMediaFileSharingSelectorInputNode) {
    chatMediaFileSharingSelectorInputNode.addEventListener('change', (e) => {
        const referenceTargetSharedFileItem = e.target.files[0];
        if (!referenceTargetSharedFileItem) return;
        
        appendRowItemLineIntoSynchronizedClassroomChatBox(`📁 <strong>Shared Asset File Document:</strong> <span style="text-decoration:underline; cursor:pointer; color:var(--success);">${referenceTargetSharedFileItem.name}</span> (Verified Link)`, false);
        writeLineToSecurityConsoleTerminal(`[MEDIA SHARE] Broadcasted file binary model tracking trace point parameter reference: ${referenceTargetSharedFileItem.name}`);
    });
}

function injectSystemCodeSnippetMarkerIntoChatBox() {
    appendRowItemLineIntoSynchronizedClassroomChatBox(`💻 <strong>Shared Executable Script Code Block:</strong> <pre style="background:rgba(0,0,0,0.05); padding:4px; border-radius:4px; font-size:10px; margin-top:2px;">document.addEventListener('DOMContentLoaded', () => { initializeViewPaneRouterRoutingSystem(); });</pre>`, false);
}

/* ==========================================================================
   10. TOAST INDICATORS: BANISH SYSTEM ALERTS PROMPTS
   ========================================================================== */
let referenceAlarmTimeoutSchedulerCheckLoop = null;
let targetSystemAlarmTimeStringMatchString = "";

function displayToastBannerIndicator(stringMessageContentTextPayload) {
    const widgetBannerBoxNode = document.getElementById('widgetSystemActiveAlarmStatusBanner');
    const labelFeedbackFieldText = document.getElementById('labelActiveAlarmFeedbackMessageText');
    
    if (widgetBannerBoxNode && labelFeedbackFieldText) {
        labelFeedbackFieldText.textContent = stringMessageContentTextPayload;
        widgetBannerBoxNode.style.display = 'flex';
    }
}

function dismissActiveAlarmStatusWidgetBanner() {
    const widgetBannerBoxNode = document.getElementById('widgetSystemActiveAlarmStatusBanner');
    if (widgetBannerBoxNode) widgetBannerBoxNode.style.display = 'none';
}

// Alarm Target Registration Core Engine
const triggerBtnRegisterAlarmNode = document.getElementById('btnRegisterAlarmRule');
if (triggerBtnRegisterAlarmNode) {
    triggerBtnRegisterAlarmNode.addEventListener('click', () => {
        const inputElementTargetTimeField = document.getElementById('inputAlarmTimeTarget');
        const stringSelectedValue = inputElementTargetTimeField.value;
        
        if (!stringSelectedValue) {
            displayToastBannerIndicator('⚠️ Operation error: Please declare hours setup parameter properties.');
            return;
        }
        
        targetSystemAlarmTimeStringMatchString = stringSelectedValue;
        displayToastBannerIndicator(`⏰ Active alarm rule registered tracking target frame position: [ ${targetSystemAlarmTimeStringMatchString} ] — Monitor running background loops.`);
        writeLineToSecurityConsoleTerminal(`[ALARM LOGGED] Target matching string criteria saved: ${targetSystemAlarmTimeStringMatchString}`);

        if (referenceAlarmTimeoutSchedulerCheckLoop) clearInterval(referenceAlarmTimeoutSchedulerCheckLoop);
        
        referenceAlarmTimeoutSchedulerCheckLoop = setInterval(() => {
            if (!targetSystemAlarmTimeStringMatchString) return;
            const dateInstance = new Date();
            const currentFormattedCompactTimeString = `${String(dateInstance.getHours()).padStart(2, '0')}:${String(dateInstance.getMinutes()).padStart(2, '0')}`;
            
            if (currentFormattedCompactTimeString === targetSystemAlarmTimeStringMatchString) {
                displayToastBannerIndicator(`⏰ TIME MATCH HIT VERIFIED! Target configuration threshold [ ${targetSystemAlarmTimeStringMatchString} ] reached.`);
                writeLineToSecurityConsoleTerminal(`[ALARM FIRED] Purging active constraint tracking vectors criteria index rules for matching item.`);
                targetSystemAlarmTimeStringMatchString = "";
                clearInterval(referenceAlarmTimeoutSchedulerCheckLoop);
            }
        }, 5000);
    });
}

/* ==========================================================================
   11. DATA FEEDS: TIKTOK/INSTAGRAM MODEL COMPILATIONS & CATALOGS
   ========================================================================= */
const dictionaryAcademicDepartmentBadgesMockDatabase = {
    Tech: [
        { title: 'Python Cloud Web Systems', teacher: 'Prof. Sarah Jenkins', time: '14:00 GMT', duration: '90 Mins', room: 'Virtual Stage Lab Alpha' },
        { title: 'React UI UX Layout Engineering', teacher: 'Instructor Liam Cross', time: '19:00 GMT', duration: '60 Mins', room: 'Design Matrix Space Gamma' }
    ],
    Business: [
        { title: 'Forex Risk Margin Allocation', teacher: 'Alex Mercer (FX Lead)', time: '08:00 GMT', duration: '45 Mins', room: 'Live Market Liquidity Desk' }
    ],
    Creative: [
        { title: 'Advanced Scalable Digital Art Vectoring', teacher: 'Elena Rostova', time: '15:00 GMT', duration: '120 Mins', room: 'Creative Arts Canvas View' }
    ]
};

const arrayInteractiveMediaShortsFeedDataset = [
    { id: 1, author: "Instructor Liam Cross", text: "Pro tip for architecture optimization layout blocks: Segregate event dependencies completely out of template files to preserve memory pools alignment.", likes: 24, saved: false, liked: false },
    { id: 2, author: "Alex Mercer (FX Lead)", text: "Always structure capital asset entry waves below preceding structural resistance lines to minimize leverage liquidation trails.", likes: 18, saved: false, liked: false }
];

function triggerDepartmentFilter(stringTargetDepartmentGroupTokenId) {
    let stringReadableDepartmentGroupHeaderLabel = 'Technology & IT';
    if (stringTargetDepartmentGroupTokenId === 'Business') stringReadableDepartmentGroupHeaderLabel = 'Business & Finance';
    else if (stringTargetDepartmentGroupTokenId === 'Creative') stringReadableDepartmentGroupHeaderLabel = 'Creative Skills';
    else if (stringTargetDepartmentGroupTokenId === 'Academic') stringReadableDepartmentGroupHeaderLabel = 'Education & Academic';
    else if (stringTargetDepartmentGroupTokenId === 'Language') stringReadableDepartmentGroupHeaderLabel = 'Language & Communication';

    const elementHeadlineWidgetLabel = document.getElementById('catalogDepartmentHeadline');
    if (elementHeadlineWidgetLabel) elementHeadlineWidgetLabel.textContent = `Active Department: ${stringReadableDepartmentGroupHeaderLabel}`;

    triggerCourseCatalogBadgeCardRenderer(stringTargetDepartmentGroupTokenId);
}

function triggerCourseCatalogBadgeCardRenderer(stringTargetDepartmentTokenId) {
    const containerDomTargetGridRow = document.getElementById('badgesDisplayGridRow');
    if (!containerDomTargetGridRow) return;

    containerDomTargetGridRow.innerHTML = '';
    const arrayTargetDepartmentBadgesDataset = dictionaryAcademicDepartmentBadgesMockDatabase[stringTargetDepartmentTokenId] || [];

    if (arrayTargetDepartmentBadgesDataset.length === 0) {
        containerDomTargetGridRow.innerHTML = '<div style="color:var(--text-muted); font-style:italic; padding:10px; font-size:12px;">No verified content modules compiled inside this pathway node yet.</div>';
        return;
    }

    arrayTargetDepartmentBadgesDataset.forEach(badgeObjectItem => {
        const elementBadgeCardStructureBox = document.createElement('div');
        elementBadgeCardStructureBox.className = 'premium-subject-badge';
        elementBadgeCardStructureBox.innerHTML = `
            <div class="badge-card-header"><span>${badgeObjectItem.title}</span><i data-lucide="verified" style="width:16px; height:16px;"></i></div>
            <div class="badge-data-field"><span class="field-tag">Lead Authority</span><div class="field-response-box">${badgeObjectItem.teacher}</div></div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:6px; margin-top:6px;">
                <div class="badge-data-field"><span class="field-tag">Schedule</span><div class="field-response-box">${badgeObjectItem.time}</div></div>
                <div class="badge-data-field"><span class="field-tag">Block</span><div class="field-response-box">${badgeObjectItem.duration}</div></div>
            </div>
        `;
        containerDomTargetGridRow.appendChild(elementBadgeCardStructureBox);
    });
    
    if (window.lucide) lucide.createIcons();
    compileAndRenderInteractiveMediaLearningFeedLayouts();
}

function compileAndRenderInteractiveMediaLearningFeedLayouts() {
    const streamTargetBoxWrapper = document.getElementById('socialStreamDynamicWrapper');
    if (!streamTargetBoxWrapper) return;

    streamTargetBoxWrapper.innerHTML = '';
    
    arrayInteractiveMediaShortsFeedDataset.forEach(postItem => {
        const postCardElement = document.createElement('div');
        postCardElement.className = 'media-stream-post';
        postCardElement.innerHTML = `
            <div class="post-header">
                <div class="post-avatar">🎓</div>
                <div>
                    <div style="font-size:12px; font-weight:700;">${postItem.author}</div>
                    <div style="font-size:10px; color:var(--text-muted);">Learning Snippet Vector Feed</div>
                </div>
            </div>
            <div class="post-video-simulation">
                <i data-lucide="clapperboard" style="width:40px; height:40px; color:white; opacity:0.25;"></i>
            </div>
            <div style="padding:12px; font-size:12px; font-weight:500; line-height:1.4;">
                ${postItem.text}
            </div>
            <div class="post-actions-row">
                <button class="post-action-node ${postItem.liked ? 'liked' : ''}" onclick="toggleMediaFeedInteractionActionMetric(${postItem.id}, 'like')">
                    <i data-lucide="heart"></i> <span id="labelLikeCounterIndex-${postItem.id}">${postItem.likes}</span>
                </button>
                <button class="post-action-node" onclick="displayToastBannerIndicator('💬 Synchronization note: Content comments indexing layers are locked inside private study modules.')">
                    <i data-lucide="message-circle"></i> <span>Review</span>
                </button>
                <button class="post-action-node ${postItem.saved ? 'saved' : ''}" onclick="toggleMediaFeedInteractionActionMetric(${postItem.id}, 'save')">
                    <i data-lucide="bookmark"></i> <span>Save</span>
                </button>
                <button class="post-action-node" onclick="displayToastBannerIndicator('⬇️ Local system download block initialized: Asset file references saved cleanly onto device memory cache.')">
                    <i data-lucide="download"></i>
                </button>
            </div>
        `;
        streamTargetBoxWrapper.appendChild(postCardElement);
    });
    if (window.lucide) lucide.createIcons();
}

function toggleMediaFeedInteractionActionMetric(targetPostId, stringActionTypeToken) {
    const targetPostObjectMatch = arrayInteractiveMediaShortsFeedDataset.find(p => p.id === targetPostId);
    if (!targetPostObjectMatch) return;

    if (stringActionTypeToken === 'like') {
        targetPostObjectMatch.liked = !targetPostObjectMatch.liked;
        targetPostObjectMatch.likes += targetPostObjectMatch.liked ? 1 : -1;
    } else if (stringActionTypeToken === 'save') {
        targetPostObjectMatch.saved = !targetPostObjectMatch.saved;
    }
    compileAndRenderInteractiveMediaLearningFeedLayouts();
}

/* ==========================================================================
   12. MOBILE VIEWPORT OVERLAY DRAWER MECHANICAL DRIVERS
   ========================================================================== */
function initializeNavigationDrawerInteractions() {
    const triggerHamburgerOpenBtn = document.getElementById('btnHamburgerSidebarOpen');
    const triggerHamburgerCloseBtn = document.getElementById('actionHideSidebarBtn');
    const containerDomSidebarChassis = document.getElementById('appNavigationSidebar');
    const layerCurtainBackgroundOverlay = document.getElementById('sidebarCurtainLayer');
    const toggleAccordionMenuNode = document.getElementById('accordionCoursesToggle');
    const listDropdownContentTreeWrapper = document.getElementById('accordionCoursesDropdownTree');

    if (triggerHamburgerOpenBtn) {
        triggerHamburgerOpenBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            containerDomSidebarChassis.classList.add('mobile-open');
            layerCurtainBackgroundOverlay.classList.add('mobile-open');
        });
    }
    if (triggerHamburgerCloseBtn) {
        triggerHamburgerCloseBtn.addEventListener('click', closeMobileNavigationSidebarDrawerCurtain);
    }
    if (layerCurtainBackgroundOverlay) {
        layerCurtainBackgroundOverlay.addEventListener('click', closeMobileNavigationSidebarDrawerCurtain);
    }
    if (toggleAccordionMenuNode && listDropdownContentTreeWrapper) {
        toggleAccordionMenuNode.addEventListener('click', (e) => {
            e.stopPropagation();
            listDropdownContentTreeWrapper.classList.toggle('open');
        });
    }
}

function closeMobileNavigationSidebarDrawerCurtain() {
    const containerDomSidebarChassis = document.getElementById('appNavigationSidebar');
    const layerCurtainBackgroundOverlay = document.getElementById('sidebarCurtainLayer');
    if (containerDomSidebarChassis) containerDomSidebarChassis.classList.remove('mobile-open');
    if (layerCurtainBackgroundOverlay) layerCurtainBackgroundOverlay.classList.remove('mobile-open');
}

/* ==========================================================================
   13. AUDIT RUNTIME LOG WRITERS
   ========================================================================== */
function writeLineToSecurityConsoleTerminal(stringConsoleLogMessageText) {
    const consoleOutputDisplayBoxTerminal = document.getElementById('elementSecurityTerminalLogBox');
    if (!consoleOutputDisplayBoxTerminal) return;
    const stringTimeStringFormat = new Date().toTimeString().split(' ')[0];
    consoleOutputDisplayBoxTerminal.appendChild(document.createTextNode(`\n[${stringTimeStringFormat}] ${stringConsoleLogMessageText}`));
    consoleOutputDisplayBoxTerminal.scrollTop = consoleOutputDisplayBoxTerminal.scrollHeight;
}

/* ==========================================================================
   14. MASTER ROOT INJECTIONS LOGICS PROCEDURES
   ========================================================================== */
const elementAdminDeployBtnNode = document.getElementById('btnAdminDeployBadgeCard');
if (elementAdminDeployBtnNode) {
    elementAdminDeployBtnNode.addEventListener('click', () => {
        const stringTargetGroupKeyId = document.getElementById('selectAdminTargetGroup').value;
        const stringInputDeptNameStringValue = document.getElementById('inputAdminDeptName').value.trim();
        const stringInputSubjectFocusStringValue = document.getElementById('inputAdminSubjectFocus').value.trim();

        if (!stringInputDeptNameStringValue || !stringInputSubjectFocusStringValue) {
            displayToastBannerIndicator('⚠️ Root deployment error: Map descriptive values before injection routines execution loops.');
            return;
        }

        if (!dictionaryAcademicDepartmentBadgesMockDatabase[stringTargetGroupKeyId]) {
            dictionaryAcademicDepartmentBadgesMockDatabase[stringTargetGroupKeyId] = [];
        }

        dictionaryAcademicDepartmentBadgesMockDatabase[stringTargetGroupKeyId].push({
            title: stringInputDeptNameStringValue,
            teacher: 'Root System Node (Admin Manual Overwrite Mapping)',
            time: 'Live Instant Trigger Sync',
            duration: 'Continuous Execution Loop Block',
            room: stringInputSubjectFocusStringValue
        });

        document.getElementById('inputAdminDeptName').value = '';
        document.getElementById('inputAdminSubjectFocus').value = '';

        displayToastBannerIndicator('✅ Master injection parameter passed. Credentials card entry added to database matrices.');
        writeLineToSecurityConsoleTerminal(`[ROOT ENGINE STRATA] Processed dynamic credential card injection vector inside branch reference path: ${stringTargetGroupKeyId}`);
        triggerDepartmentFilter(stringTargetGroupKeyId);
    });
}

// Focus clocks countdown execution logic blocks triggers trackers
let countTotalAttendanceSecondsTracked = 0;
setInterval(() => {
    countTotalAttendanceSecondsTracked++;
    const displayWidgetElementClockField = document.getElementById('displayAttendanceClock');
    if (displayWidgetElementClockField && systemActiveUserSessionRole) {
        const pad = (num) => String(num).padStart(2, '0');
        displayWidgetElementClockField.textContent = `${pad(Math.floor(countTotalAttendanceSecondsTracked / 3600))}:${pad(Math.floor((countTotalAttendanceSecondsTracked % 3600) / 60))}:${pad(countTotalAttendanceSecondsTracked % 60)}`;
    }
}, 1000);

let integerPomodoroSecondsRemaining = 1500;
let referenceIntervalObjectPomodoroCountdown = null;
const displayPomodoroClockNode = document.getElementById('displayPomodoroClock');

if (document.getElementById('btnPomodoroStart')) {
    document.getElementById('btnPomodoroStart').addEventListener('click', () => {
        if (referenceIntervalObjectPomodoroCountdown) return;
        writeLineToSecurityConsoleTerminal('[POMODORO ENGINE] Active study block initialized countdown.');
        referenceIntervalObjectPomodoroCountdown = setInterval(() => {
            if (integerPomodoroSecondsRemaining > 0) {
                integerPomodoroSecondsRemaining--;
                const pad = (num) => String(num).padStart(2, '0');
                if (displayPomodoroClockNode) displayPomodoroClockNode.textContent = `${pad(Math.floor(integerPomodoroSecondsRemaining / 60))}:${pad(integerPomodoroSecondsRemaining % 60)}`;
            } else {
                clearInterval(referenceIntervalObjectPomodoroCountdown);
                referenceIntervalObjectPomodoroCountdown = null;
                integerPomodoroSecondsRemaining = 1500;
                displayToastBannerIndicator("🏆 Focus Block Interval Completed! Take a short break.");
            }
        }, 1000);
    });
}
if (document.getElementById('btnPomodoroPause')) {
    document.getElementById('btnPomodoroPause').addEventListener('click', () => {
        if (referenceIntervalObjectPomodoroCountdown) {
            clearInterval(referenceIntervalObjectPomodoroCountdown);
            referenceIntervalObjectPomodoroCountdown = null;
            writeLineToSecurityConsoleTerminal('[POMODORO ENGINE] Countdown processes held explicitly.');
        }
    });
}

// Diagnostic message submission logic blocks triggers trackers
const triggerActionSubmitBtnNode = document.getElementById('btnSubmitAiQuery');
if (triggerActionSubmitBtnNode) {
    triggerActionSubmitBtnNode.addEventListener('click', () => {
        const queryField = document.getElementById('inputAiUserQueryField');
        const textVal = queryField.value.trim();
        if (!textVal) return;
        
        const historyBox = document.getElementById('aiTutorMessageScrollHistoryBox');
        const uBubble = document.createElement('div');
        uBubble.className = 'msg-bubble user';
        uBubble.textContent = textVal;
        historyBox.appendChild(uBubble);
        queryField.value = '';
        
        setTimeout(() => {
            const aBubble = document.createElement('div');
            aBubble.className = 'msg-bubble assistant';
            aBubble.textContent = "Data inquiry verified. Bounding track checks out with zero execution structural flaws. Maintain target risk parameters configurations layers.";
            historyBox.appendChild(aBubble);
            historyBox.scrollTop = historyBox.scrollHeight;
        }, 1000);
    });
}
