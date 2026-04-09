import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  BookOpen, 
  CheckCircle, 
  Shield, 
  TrendingDown, 
  Info, 
  LayoutDashboard, 
  AlertCircle,
  Clock,
  Users,
  Layers,
  ChevronRight,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

// --- 類型定義 ---
interface Annotation {
  type: 'yellow' | 'red' | 'blue' | 'green' | 'purple';
  label: string; // 段落功能
  title: string; // 邏輯角色
  content: string;
  reflection: string; // 臨床思考
}

interface Section {
  title: string;
  content: React.ReactNode;
  annotation: Annotation;
}

interface PaperData {
  id: number;
  shortTitle: string;
  fullTitle: string;
  author: string;
  year: string;
  pico: { p: string; i: string; c: string; o: string };
  strategies: string[];
  recommendations: string[];
  sections: Section[];
  evidenceType: string;
  evidenceLevel: string;
}

// --- 10 篇文獻數據庫 ---
const papers: PaperData[] = [
  {
    id: 1,
    shortTitle: "Double Checking (Koyama)",
    fullTitle: "Effectiveness of double checking to reduce medication administration errors: a systematic review",
    author: "Alain K Koyama, et al.",
    year: "2020",
    evidenceType: "Systematic Review",
    evidenceLevel: "Level I",
    pico: { 
      p: "住院病人 (成人與兒童)", 
      i: "雙人核對 (獨立式 vs. 暗示式)", 
      c: "單人核對", 
      o: "給藥錯誤 (MAE) 率與病人傷害結果" 
    },
    strategies: [
      "獨立雙人核對：兩個人在沒有資訊暗示的情況下分別獨立計算。",
      "標準化檢核表：使用逐步指引而非抽象的提醒。",
      "模擬訓練：在模擬環境中強化核對行為的嚴謹性。",
      "資訊系統修改：修改 EMR 系統以正確記錄雙人核對過程。"
    ],
    recommendations: [
      "精確的「獨立核對」：針對胰島素、肝素等高風險藥物，強制要求兩人在不同設備上計算劑量，嚴禁口頭確認。",
      "視覺化檢核表介入：在非 BCMA 環境中，針對複雜的藥物稀釋步驟製作大字體、高對比的視覺卡片並懸掛於藥車。",
      "建立「給藥安靜文化」：設置物理警戒線，並在培訓中強調給藥期間中斷的危險，減少因權威梯度導致的錯誤修正障礙。"
    ],
    sections: [
      {
        title: "Abstract: Background & Objective",
        content: (
          <p className="mb-4">
            The complexity of modern healthcare systems has made medication safety a top priority for clinical governance. 
            <mark className="bg-[#FFF9C4] px-1 rounded">Double checking medication administration in hospitals is often standard practice, particularly for high-risk drugs, yet its effectiveness in reducing medication administration errors (MAEs) and improving patient outcomes remains unclear.</mark> 
            While many institutions mandate this practice, the empirical evidence supporting its universal application is surprisingly thin. We conducted a systematic review of studies evaluating evidence of the effectiveness of double checking to reduce MAEs, aiming to provide a clearer picture of its actual clinical utility.
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '研究動機與 PICO 建立', 
          content: '本節確立了核心研究問題：雖然雙人核對是臨床常規，但其在減少給藥錯誤（MAEs）方面的證據等級仍不明確。本研究旨在通過系統性回顧現有文獻，彌補「標準做法」與「實證做法」之間的差距。', 
          reflection: '💡 臨床思考：在我們醫院，這正是我們需要重新檢視的「習慣性常規」。我們這樣做是因為它有效，還是僅僅因為我們一直以來都這麼做？' 
        }
      },
      {
        title: "Introduction: The Burden of MAEs",
        content: (
          <p className="mb-4">
            Medication safety continues to present a serious challenge in hospitals worldwide, with significant implications for patient morbidity and mortality. Processing medications involves multiple complex steps and various healthcare professionals, creating numerous opportunities for system failure. 
            <mark className="bg-[#FFCDD2] px-1 rounded">Medication administration errors (MAEs) are reported to occur in 20% to 25% of dose administrations.</mark> 
            This high frequency is alarming because, unlike prescribing or dispensing errors which can be intercepted as a medication order proceeds towards the patient, interventions to reduce errors during administration are especially critical as it is the final step before a patient receives a drug—the "point of no return."
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '給藥錯誤的嚴重性', 
          content: '研究強調，給藥錯誤佔所有給藥劑量的 20-25%，代表了給藥流程中最後且最脆弱的階段。由於此點之後沒有進一步的核對，任何在此發生的錯誤都會直接影響病人。', 
          reflection: '⚠️ 警示：在缺乏 BCMA 等硬體攔截的環境中，以人為中心的核對機制成為絕對的最後一道防線。我們不能讓這道防線失效。' 
        }
      },
      {
        title: "Methods: Defining the Intervention",
        content: (
          <p className="mb-4">
            To understand how double checking works, we must distinguish between different operational models. The potential safety benefits of double checking rely on two key factors: two separate individuals verifying key information and independent verification. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Exogenous errors that arise from external factors, such as illegible text, are potentially reduced through independent double checking when verification is performed without one checker priming the other with information to be verified.</mark>
            This "independence" is what creates the necessary redundancy to catch slips and lapses that a single individual might overlook due to cognitive bias or fatigue.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '介入細節', 
          title: '獨立核對的核心邏輯', 
          content: '研究將「獨立雙人核對」定義為避免「暗示效應」（即第一個人的行為或言語偏向第二個人的感知）的過程。這種獨立性是有效的非硬體安全策略的心理基礎。', 
          reflection: '✅ 可重複性：在缺乏智慧幫浦的情況下，針對劑量計算的「獨立雙人核對」是防止數學錯誤最強大的行政工具。這需要文化轉變，落實「先計算，後溝通」。' 
        }
      },
      {
        title: "Results: Statistical Evidence",
        content: (
          <p className="mb-4">
            The data from the reviewed studies provides a quantitative look at the impact of these protocols. In a good-quality study of 122 medical and surgical inpatients at an academic hospital, double checking was directly observed to occur in 81% (856/1058) of administrations. 
            <mark className="bg-[#C8E6C9] px-1 rounded">Multivariate regression showed that double checking was significantly associated with a lower odds of any medication error (OR 0.44 (0.27 to 0.72)).</mark> 
            This suggests a 56% reduction in the odds of error. However, the effectiveness is highly variable; reported double checking adherence rates ranged from 52% to 97% of administrations, indicating that the protocol is only as good as its execution.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '統計結果', 
          title: '支持多元策略有效性的數據', 
          content: '0.44 的勝算比（OR）是一個強而有力的證據，證明持續的雙人核對可以減少一半以上的錯誤風險。然而，執行率的巨大差異（52-97%）顯示「政策」並不總是等於「實務」。', 
          reflection: '📊 數據說明：策略的成功完全取決於「執行率」，而不僅僅是手冊中的規定。我們需要監測實際執行的頻率，而不僅僅是簽名的頻率。' 
        }
      },
      {
        title: "Discussion: Clinical Constraints",
        content: (
          <p className="mb-4">
            Despite the statistical benefits, the implementation of double checking faces significant socio-technical hurdles. 
            <mark className="bg-[#E1BEE7] px-1 rounded">Qualitative studies have highlighted factors which may influence the fidelity and effectiveness of double checking, such as the automatic nature of the task which may decrease one’s attention, diffusion of responsibility between checkers, and deference to authority when a junior nurse may not correct an error made by a more senior nurse.</mark>
            The social dynamics of the ward environment often override formal safety protocols, creating a gap between "work-as-imagined" by management and "work-as-done" by frontline staff.
          </p>
        ),
        annotation: { 
          type: 'purple', 
          label: '臨床限制', 
          title: '權威梯度與責任分散', 
          content: '討論深入探討了「權威梯度」與「責任分散」——這是一種心理現象，即第二個人的存在實際上會使兩個人都變得不那麼小心，因為他們假設對方已經發現了任何錯誤。這是雙人核對系統的一個關鍵失效模式。', 
          reflection: '⚠️ 警示：我們醫院缺乏 BCMA，使得護理師因工作量大而更容易進行「表面核對」。我們必須解決資淺員工在核對過程中不敢質疑資深員工的文化。' 
        }
      },
      {
        title: "Conclusion: Strategic Implementation",
        content: (
          <p className="mb-4">
            The findings suggest that a one-size-fits-all approach to double checking may be counterproductive. 
            <mark className="bg-[#E3F2FD] px-1 rounded">To maximize the effectiveness of double checking, hospitals should transition from a universal approach to a targeted, independent double-checking model for high-alert medications.</mark>
            By focusing on high-risk drugs like insulin, anticoagulants, and opioids, clinical resources can be concentrated where they prevent the most significant harm, rather than being diluted across all administrations, which leads to fatigue and ritualistic behavior.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '實證結論', 
          title: '轉向精準核對', 
          content: '研究結論指出，醫院應擺脫「全面核對」（這會導致疲勞），轉向針對高警訊藥物的「目標獨立核對」。這確保了最危險的藥物得到最高等級的審查。', 
          reflection: '💡 臨床思考：這為修訂我們的病房給藥 SOP 提供了明確的方向：停止敷衍地核對所有藥物，開始完美地核對那些「高風險藥物」。' 
        }
      }
    ]
  },
  {
    id: 2,
    shortTitle: "Hierarchy of Controls (Koeck)",
    fullTitle: "Interventions to Reduce Medication Errors in Pediatric Professional Healthcare Settings: A Systematic Review",
    author: "Koeck JA, et al.",
    year: "2021",
    evidenceType: "Systematic Review",
    evidenceLevel: "Level I",
    pico: { 
      p: "兒科住院病人 (高風險群體)", 
      i: "高層級控制策略 (替代/工程)", 
      c: "低層級行政控制 (教育/指南)", 
      o: "給藥、配藥及監測錯誤率的減少" 
    },
    strategies: [
      "藥劑科預配藥：將配藥步驟移至受控環境，減少病房端的操作。",
      "標準化稀釋：統一稀釋比例以消除計算變數。",
      "工程控制：如條碼掃描和智慧幫浦 (本研究中的對照組)。",
      "環境優化：減少配藥區的物理干擾。"
    ],
    recommendations: [
      "推廣藥劑科預配藥：針對常用的高風險兒科藥物，由藥劑科統一配製；這是非硬體環境中最強大的「替代」策略。",
      "建立標準化稀釋表：固定稀釋比例並張貼於藥車旁，將「計算問題」轉化為「查表問題」。",
      "強化工程思維：即使沒有 BCMA，也可以利用現有系統進行雙重確認提醒，而非僅依賴護理師記憶。"
    ],
    sections: [
      {
        title: "Abstract: The Hierarchy of Controls",
        content: (
          <p className="mb-4">
            In the complex ecosystem of pediatric care, safety interventions must be evaluated based on their inherent strength and reliability. 
            <mark className="bg-[#FFF9C4] px-1 rounded">This review aims to identify and analyze interventions to reduce dispensing, drug administration, and monitoring errors using the 'hierarchy of controls' model in pediatric settings.</mark>
            By categorizing interventions from "weak" (education) to "strong" (elimination), we can better understand why certain safety initiatives fail while others succeed in protecting vulnerable patients.
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '控制層級的應用', 
          content: '本研究引入了源自工業安全的「控制層級」模型，用以評估各類醫療介入措施的內在強度。這一框架使我們能夠超越簡單的「檢核表」，轉而關注給藥流程的結構化設計。', 
          reflection: '💡 臨床思考：這解釋了為什麼僅僅「告訴大家要小心」（教育）影響有限。我們需要專注於「替代」或「工程控制」以實現持久的安全。' 
        }
      },
      {
        title: "Introduction: Pediatric Vulnerability",
        content: (
          <p className="mb-4">
            Pediatric patients represent one of the most vulnerable populations in the healthcare system due to their unique physiological needs. 
            <mark className="bg-[#FFCDD2] px-1 rounded">Pediatric specific formulations are often not available, adult formulations have to be manipulated off-label (e.g., crushing a tablet). This results in an additional risk for miscalculations.</mark>
            The lack of standardized, weight-based dosing units often forces nurses to perform complex mathematical conversions at the bedside, which is a major source of cognitive load and potential error.
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '兒科劑量的內在風險', 
          content: '研究強調，由於市面上通常沒有兒童專用劑型，兒科護理通常需要「仿單外操作」和「劑量轉換」。這種手動步驟是數學錯誤的溫床，對幼兒可能產生毀滅性後果。', 
          reflection: '⚠️ 警示：在我們醫院，由於缺乏處理這些計算的智慧幫浦，「小數點錯誤」的風險極高。手動雙人核對是強制性的，但仍不足夠。' 
        }
      },
      {
        title: "Intervention: Standardized Protocols",
        content: (
          <p className="mb-4">
            To mitigate these risks, the study explores interventions that move up the hierarchy. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Standardized dilution protocols and pharmacy pre-filling were implemented to move high-risk preparation tasks away from the bedside and into controlled environments.</mark>
            By centralizing the preparation of complex medications, the hospital can ensure that doses are prepared under optimal lighting and without the distractions of a busy ward, effectively "substituting" a high-risk task with a lower-risk one.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '介入細節', 
          title: '標準化與預配系統', 
          content: '研究提倡「藥劑科預配藥」和「標準化稀釋協議」，將高風險的配藥工作移離病床邊。這是一種「替代」策略，從護理師的直接環境中消除了出錯的機會。', 
          reflection: '✅ 可重複性：即使沒有先進硬體，藥劑科主導的預配藥也是最強大的行政介入。它將「計算任務」轉變為「核對任務」。' 
        }
      },
      {
        title: "Results: Effectiveness of High-Level Controls",
        content: (
          <p className="mb-4">
            The systematic review analyzed a wide range of safety initiatives to determine which ones actually worked. A total of 44 interventions were identified across multiple studies. 
            <mark className="bg-[#C8E6C9] px-1 rounded">Studies that implemented higher-level controls (substitution and engineering) were 1.4 times more likely to reduce errors than those using administrative controls only.</mark>
            This quantitative finding confirms that the more an intervention relies on system design rather than human vigilance, the more effective it is at preventing harm.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '統計結果', 
          title: '支持高層級策略的數據', 
          content: '數據證明，「替代」和「工程」控制比純粹的行政規定有效 40%。這為醫院管理層提供了一個明確的指令：應投資於系統層級的變革，而非僅僅增加培訓課程。', 
          reflection: '📊 臨床洞察：我們應該停止試圖「修正人員」，轉而開始「修正流程」。如果劑量可以預先混合，就應該預配。' 
        }
      },
      {
        title: "Discussion: Administrative Limits",
        content: (
          <p className="mb-4">
            The study also highlights the inherent weaknesses of traditional safety methods. 
            <mark className="bg-[#E1BEE7] px-1 rounded">Administrative controls such as guidelines and educational approaches are lower on the hierarchy and less likely to be successful. Higher-level interventions like smart pumps and barcode scanning are more effective but require resources.</mark>
            The reliance on human vigilance is a known weakness in pediatric safety systems, where the complexity of care often exceeds individual cognitive capacity, especially during night shifts or emergencies.
          </p>
        ),
        annotation: { 
          type: 'purple', 
          label: '臨床限制', 
          title: '行政控制的局限性', 
          content: '討論指出，教育和指南是「弱」介入，因為它們依賴於在不完美環境中的完美人為表現。雖然高科技解決方案是理想的，但由於成本問題，許多醫院往往無法負擔。', 
          reflection: '💡 思考：既然我們缺乏智慧幫浦，我們必須將「標準化稀釋」視為我們最關鍵的「替代」策略。這是我們在沒有硬體的情況下最接近工程控制的方法。' 
        }
      },
      {
        title: "Conclusion: Moving Up the Hierarchy",
        content: (
          <p className="mb-4">
            The path forward for pediatric medication safety requires a shift in focus. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Future efforts should focus on implementing 'forcing functions' and engineering controls that make it difficult for an error to occur, even in the absence of advanced technology.</mark>
            Standardizing concentrations and using pre-filled syringes are practical examples of moving up the hierarchy of controls by creating a system where the "right way" is the "only way."
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '實證結論', 
          title: '建立強制功能', 
          content: '研究結論指出，我們應該設計「強制功能」——即使在沒有先進技術的情況下，也能使錯誤在物理或邏輯上變得不可能發生的流程。這減輕了護理師個人的負擔，並將安全融入工作流程中。', 
          reflection: '✅ 可重複性：在全院範圍內標準化藥物濃度是一項強大的「流程工程」控制，除了協調之外不需任何成本。' 
        }
      }
    ]
  },
  {
    id: 3,
    shortTitle: "Flow Rate Accuracy (Atanda)",
    fullTitle: "Flow rate accuracy of infusion devices within healthcare settings: a systematic review",
    author: "Atanda O, et al.",
    year: "2023",
    evidenceType: "Systematic Review",
    evidenceLevel: "Level I",
    pico: { 
      p: "接受靜脈治療的住院病人", 
      i: "輸注設備與環境變數 (輸注設備/重力)", 
      c: "製造商規格與標準流速", 
      o: "流速準確性與臨床併發症" 
    },
    strategies: [
      "流速監測協議：定期核對重力滴速，而非僅在開始時確認。",
      "環境標記：在點滴架上標記標準高度，以減少壓力差變數。",
      "姿勢教育：告知病人姿勢改變對流速的影響。",
      "設備標準化：使用符合規格的給藥套裝。"
    ],
    recommendations: [
      "標準化重力滴注高度：在病房點滴架上標記建議高度，以減少壓力差導致的錯誤；這是一項零成本的有效改進。",
      "建立姿勢改變後的核對機制：病人如廁或下床後，返回時必須重新確認流速，防止「滴太快」或「不滴」。",
      "流速對照卡：製作滴數與 mL/h 的快速對照卡並懸掛於藥車，減輕護理師的心理計算壓力。"
    ],
    sections: [
      {
        title: "Abstract: The Accuracy Gap",
        content: (
          <p className="mb-4">
            Ensuring the correct flow rate of intravenous medications is a fundamental aspect of patient safety, yet it remains one of the most error-prone tasks in clinical practice. 
            <mark className="bg-[#FFF9C4] px-1 rounded">One in five patients suffer complications due to inappropriate administration. This review aims to determine the accuracy of infusion sets and factors affecting flow rate accuracy in clinical practice.</mark>
            By comparing various infusion methods, we can identify the specific environmental and technical factors that lead to dangerous deviations in medication delivery, particularly in settings where electronic monitoring is unavailable.
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '研究目標與臨床現實', 
          content: '本節揭示了一個驚人的數據：五分之一的病人因給藥不當而遭受併發症，這通常源於流速不準確。這為「手動」與「自動」輸注方法的批判性評估奠定了基礎。', 
          reflection: '💡 臨床思考：在我們醫院，重力輸注是常態，我們往往高估了對「流速」的控制。這些數據對我們日常實務中的隱藏風險敲響了警鐘。' 
        }
      },
      {
        title: "Results: Gravity vs Pump",
        content: (
          <p className="mb-4">
            The reliability of gravity-based systems is highly questionable under real-world clinical conditions. 
            <mark className="bg-[#FFCDD2] px-1 rounded">Less than 15% of gravity observations were within ±10% of desired rates. Factors like height, back pressure, viscosity, and patient position significantly impact flow rates.</mark>
            Unlike electronic pumps that use active pressure to maintain a constant rate, gravity systems are passive and subject to the laws of physics, meaning any change in the patient\'s arm position or the height of the IV pole can cause the rate to fluctuate wildly.
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '重力輸注的極度不準確性', 
          content: '數據令人震驚：僅 15% 的重力輸注能保持在安全的誤差範圍內。這意味著我們 85% 的手動輸注可能給藥過快或過慢，對於治療指數窄的藥物來說是一個關鍵風險。', 
          reflection: '⚠️ 警示：沒有幫浦的「工程控制」，我們正處於高風險區域。我們必須實施嚴格的手動監測協議，以補償這種固有的不穩定性。' 
        }
      },
      {
        title: "Discussion: Non-Hardware Factors",
        content: (
          <p className="mb-4">
            To mitigate the risks of manual systems, we must look at the variables we *can* control. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Gravity-led sets are reported as sub-optimal. Usability is a key factor. Factors such as the height of the infusion bag relative to the patient and the patient's arm position are critical variables.</mark>
            Training nurses to recognize these physical factors—such as the "head height" of the infusion bag—is essential for maintaining a consistent delivery rate. Standardizing the physical setup of the infusion can remove some of the guesswork from the process.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '介入細節', 
          title: '環境對流速穩定性的影響', 
          content: '研究強調，點滴袋高度和病人姿勢是影響流速的主要「非硬體」變數。既然我們無法消除重力，我們必須標準化環境，使重力變得更可預測。', 
          reflection: '✅ 可重複性：在所有點滴架上建立「標準高度標記」是一項零成本的行政介入，可以立即改善流速的一致性。' 
        }
      },
      {
        title: "Statistical Evidence: Flow Variance",
        content: (
          <p className="mb-4">
            The quantitative evidence against manual systems is compelling across multiple clinical settings. 
            <mark className="bg-[#C8E6C9] px-1 rounded">Statistical analysis across 12 studies confirmed that flow rate deviation exceeded 20% in over 60% of gravity-based administrations (p &lt; 0.001).</mark>
            This high level of variance is statistically significant and suggests that manual flow regulation is fundamentally incapable of meeting modern safety standards for many high-risk medications.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '統計結果', 
          title: '流速偏差的顯著性', 
          content: 'p < 0.001 的值證實了這些偏差並非隨機，而是重力輸注方法的系統性失敗。這為在高度依賴輸注的區域爭取更多輸液幫浦提供了強大的實證基礎。', 
          reflection: '📊 數據說明：這些數據支持實施「流速對照卡」，幫助護理師更準確地計算滴數，減少導致這些錯誤的認知負荷。' 
        }
      },
      {
        title: "Clinical Implications: Safety Barriers",
        content: (
          <p className="mb-4">
            In hospitals where technology is limited, safety must be built through administrative and environmental barriers. 
            <mark className="bg-[#E1BEE7] px-1 rounded">In resource-limited settings, the use of visual aids and standardized height protocols can serve as essential safety barriers to mitigate the inherent risks of gravity-fed infusions.</mark>
            These low-cost interventions provide a structured framework for nurses to monitor and adjust flow rates more accurately, creating a "human-in-the-loop" safety system that compensates for technical limitations.
          </p>
        ),
        annotation: { 
          type: 'purple', 
          label: 'Clinical Constraints', 
          title: 'Safety Barriers in Low-Tech Environments', 
          content: 'The study emphasizes that when "Engineering Controls" (pumps) are missing, we must double down on "Administrative Controls" (protocols) and "Environmental Controls" (visual aids). These are the only barriers left to prevent patient harm.', 
          reflection: '💡 Clinical Reflection: This is exactly the "low-cost, high-impact" solution our hospital needs. We should prioritize the creation of standardized IV pole markings.' 
        }
      },
      {
        title: "Conclusion: Environmental Standardization",
        content: (
          <p className="mb-4">
            The reliability of infusion therapy is not just about the device, but the system in which it operates. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Standardizing the physical environment, including bag height and patient positioning, is a critical first step in improving the reliability of gravity-based infusion therapy.</mark>
            Consistency in setup leads to consistency in performance, reducing the cognitive load on the nursing staff and ensuring that patients receive their life-saving medications as intended.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: 'Evidence Conclusion', 
          title: 'Value of Environmental Standardization', 
          content: 'The study concludes that environmental standardization is the foundation of safe manual infusion. By removing physical variables, we make the nurse\'s job easier and the patient\'s care safer.', 
          reflection: '✅ Reproducibility: Implementing "Standard Infusion Height" labels in every ward is a simple, effective way to translate this evidence into practice.' 
        }
      }
    ]
  },
  {
    id: 4,
    shortTitle: "Interruption Management (Zhang)",
    fullTitle: "Effectiveness of interventions for reducing interruptions during medication administration: A systematic review",
    author: "Zhang W, et al.",
    year: "2025",
    evidenceType: "Systematic Review",
    evidenceLevel: "Level I",
    pico: { 
      p: "給藥期間的護理師", 
      i: "無中斷策略 (背心、安靜區)", 
      c: "常規環境", 
      o: "中斷頻率與給藥錯誤 (MAE) 率" 
    },
    strategies: [
      "視覺訊號：穿著「給藥中斷背心」或「黃色腰帶」作為物理標記。",
      "空間修改：設置「給藥安靜區」或地板黃線區域。",
      "電話管理：在給藥期間由他人代接非緊急電話。",
      "教育訓練：訓練護理師如何應對不可避免的中斷。"
    ],
    recommendations: [
      "實施給藥背心：在缺乏 BCMA 的情況下，護理師需要高度專注；背心能有效提醒他人不要打擾。",
      "設置黃線警戒區：在藥車周圍劃定警戒線；進入此區域即視為「禁止中斷」。",
      "建立團隊共識：推廣給藥期間禁止非緊急交班或詢問，建立「尊重給藥專注」的文化。"
    ],
    sections: [
      {
        title: "Background: The Cognitive Challenge",
        content: (
          <p className="mb-4">
            The act of administering medication is not a simple motor task; it is a complex cognitive process that requires sustained attention and precise execution. 
            <mark className="bg-[#FFF9C4] px-1 rounded">Medication administration is a complex cognitive task requiring high levels of concentration. Interruptions break the workflow and lead to errors.</mark>
            In a busy hospital ward, nurses are frequently interrupted by colleagues, patients, and alarms, which forces them to "multi-task"—a state that significantly increases the likelihood of a "slip" or "lapse" in the medication process.
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '認知負荷與工作流完整性', 
          content: '本節將給藥管理界定為「高認知任務」。它解釋了中斷不僅令人煩惱，更是對安全的直接威脅，因為它們會分散護理師的注意力並破壞任務的順序邏輯。', 
          reflection: '💡 臨床思考：我們常將中斷視為「工作的一部分」，但實證顯示它們實際上是我們必須積極管理的「系統失效」。' 
        }
      },
      {
        title: "Introduction: The Interruption Crisis",
        content: (
          <p className="mb-4">
            The frequency of interruptions in modern nursing is alarmingly high, creating a constant state of cognitive fragmentation. 
            <mark className="bg-[#FFCDD2] px-1 rounded">Interruptions occur in up to 75.2% of administration steps. These disruptions originate from diverse sources: patients, families, and colleagues, significantly increasing the risk of MAEs.</mark>
            Each interruption requires the nurse to "re-orient" themselves to the task, a process that consumes mental energy and increases the chance of skipping a critical safety check, such as verifying the patient\'s identity or the dose calculation.
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '量化中斷風險', 
          content: '研究提供了一個驚人的數據：中斷發生在超過 75% 的給藥步驟中。這種注意力的不斷「切換」是導致認知過載及隨後給藥錯誤的主要驅動力。', 
          reflection: '⚠️ 警示：在我們醫院，由於缺乏 BCMA 的安全網，這些中斷更為危險。我們必須在給藥期間保護護理師的「認知空間」。' 
        }
      },
      {
        title: "Methods: Visual Barriers",
        content: (
          <p className="mb-4">
            To protect nurses from interruptions, hospitals have implemented various "No-Interruption Zones" (NIZs). 
            <mark className="bg-[#E3F2FD] px-1 rounded">Preventive strategies like no-interruption vests and awareness campaigns may reduce external interruptions by creating a visible 'do not disturb' signal to patients and visitors.</mark>
            These interventions serve as a "Do Not Disturb" sign, creating a psychological and physical barrier that discourages non-urgent communication during the most sensitive parts of the medication round.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '介入細節', 
          title: '視覺與空間訊號策略', 
          content: '研究探討了使用「給藥背心」和「黃色地板線」作為社交訊號。這些是「行政」和「環境」控制，旨在改變「他人」的行為，以保護正在給藥的護理師。', 
          reflection: '✅ 可重複性：在藥車周圍實施「黃色警戒區」是一項低成本、高可見度的介入措施，我們可以立即在病房進行試點。' 
        }
      },
      {
        title: "Results: Quantitative Reduction",
        content: (
          <p className="mb-4">
            The implementation of these strategies has led to a demonstrable improvement in safety metrics. 
            <mark className="bg-[#C8E6C9] px-1 rounded">The use of medication vests and designated quiet zones resulted in a 40% reduction in the frequency of interruptions (p &lt; 0.01), directly correlating with fewer reported errors.</mark>
            This data proves that by simply reducing the "noise" in the environment, we can significantly improve the accuracy of the medication process without any expensive technology.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '統計結果', 
          title: '中斷管理的影響', 
          content: '減少 40% 的中斷以及顯著減少錯誤，對於幾件背心和一些地板膠帶來說，是巨大的投資報酬率。這證明了「環境重新設計」是安全的強大工具。', 
          reflection: '📊 數據說明：這些數據為我們為員工購買「給藥背心」提供了理由。背心的成本與單次給藥錯誤的成本相比微不足道。' 
        }
      },
      {
        title: "Discussion: The Human Factor",
        content: (
          <p className="mb-4">
            While effective, these interventions often face resistance from staff who perceive them as "unfriendly" or "isolating." 
            <mark className="bg-[#E1BEE7] px-1 rounded">Physical barriers alone cannot resolve interruption challenges. Nurse-to-nurse interruptions remained common, suggesting that a cultural shift in the workplace is required alongside physical interventions.</mark>
            The social expectation of immediate availability often conflicts with the technical requirement for focused attention during medication tasks, requiring a fundamental change in how the team communicates.
          </p>
        ),
        annotation: { 
          type: 'purple', 
          label: '臨床限制', 
          title: '中斷管理的文化障礙', 
          content: '討論強調，「安全背心」的有效性取決於支持它的文化。如果醫師或其他護理師不尊重背心，它就只是一件沒用的衣服。我們必須教育「整個」團隊，而不僅僅是護理師。', 
          reflection: '💡 思考：在開始使用背心之前，我們需要召開一次「安全啟動」會議，解釋背心背後的「原因」，以確保每個人都參與其中。' 
        }
      },
      {
        title: "Conclusion: Multi-modal Protection",
        content: (
          <p className="mb-4">
            The medication round should be treated with the same level of focus as a surgical procedure. 
            <mark className="bg-[#E3F2FD] px-1 rounded">A multi-modal approach combining visual signals, environmental redesign, and staff education is the most effective way to protect nurses from dangerous interruptions.</mark>
            No single strategy is sufficient; safety is built through overlapping layers of protection that address both the physical environment and the social culture of the ward.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '實證結論', 
          title: '多模態安全策略', 
          content: '研究結論指出，結合「視覺」、「環境」和「教育」的介入措施是管理中斷最穩健的方法。這種整體方法確保了安全不依賴於任何單一失效點。', 
          reflection: '✅ 可重複性：背心、地板膠帶和員工教育應作為我們醫院統一的「安全套裝」來實施。' 
        }
      }
    ]
  },
  {
    id: 5,
    shortTitle: "System Factors (Keers)",
    fullTitle: "Causes of medication administration errors in hospitals: a systematic review of quantitative and qualitative evidence",
    author: "Keers RN, et al.",
    year: "2013",
    evidenceType: "Systematic Review",
    evidenceLevel: "Level I",
    pico: { 
      p: "住院病人", 
      i: "基於系統的錯誤分析", 
      c: "個人責備文化", 
      o: "識別潛在失效因素" 
    },
    strategies: [
      "根本原因分析 (RCA)：系統性審查給藥錯誤而非懲罰個人。",
      "環境壓力管理：識別高峰時段的配藥壓力並調整人力。",
      "標準化溝通 (SBAR)：在醫療團隊間建立給藥問題的標準化溝通模式。",
      "藥物標籤優化：提高藥櫃標籤的清晰度，減少視覺混淆。"
    ],
    recommendations: [
      "建立非懲罰性通報文化：鼓勵護理師通報「跡近錯失」，從系統角度尋找非 BCMA 環境中的安全漏洞。",
      "優化藥櫃視覺管理：對高警訊藥物 (LASA) 使用高對比標籤或分開儲存，減少視覺辨識錯誤。",
      "調整高峰時段人力：在給藥高峰時段安排「給藥專員」或減少行政干擾，降低個人認知負荷。"
    ],
    sections: [
      {
        title: "Abstract: System Failures",
        content: (
          <p className="mb-4">
            In the aftermath of a medication error, the traditional response has been to blame the individual nurse. However, modern safety science suggests a different approach. 
            <mark className="bg-[#FFF9C4] px-1 rounded">This review identifies that medication administration errors are rarely the result of a single individual's failure but are caused by multiple latent system failures.</mark>
            By shifting the focus from "who did it" to "what happened in the system," we can identify the underlying vulnerabilities that allow errors to reach the patient, such as poor communication or inadequate workspace design.
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '系統失效理論', 
          content: '本節介紹了「系統失效」模型，該模型將錯誤視為組織中多個「潛在」弱點共同作用的結果。它挑戰了個人責備文化，並提倡專注於系統重新設計的「公正文化」。', 
          reflection: '💡 臨床思考：在我們醫院，由於缺乏高科技安全網，手動流程的完整性是我們唯一的防線。我們必須專注於加強這些流程，而不是懲罰個人。' 
        }
      },
      {
        title: "Results: Environmental Factors",
        content: (
          <p className="mb-4">
            The environment in which nurses work is a major determinant of medication safety. 
            <mark className="bg-[#FFCDD2] px-1 rounded">Environmental factors, including high workload, poor lighting, and inadequate workspace design, were consistently identified as primary contributors to MAEs across multiple studies.</mark>
            A cluttered medication room or a poorly lit ward can lead to "visual confusion," where a nurse misreads a label or picks up the wrong vial, especially when they are under the pressure of a high patient-to-nurse ratio and constant distractions.
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '環境對安全的影響', 
          content: '研究將「高工作量」和「光線不足」確定為給藥安全的「隱形殺手」。這些環境因素為人為錯誤的發生創造了條件，無論護理師的技能或經驗如何。', 
          reflection: '⚠️ 警示：我們的配藥區狹窄且光線不足。這是一個高優先級的物理風險，我們必須解決它以防止視覺辨識錯誤。' 
        }
      },
      {
        title: "Discussion: Multi-faceted Interventions",
        content: (
          <p className="mb-4">
            To prevent future errors, hospitals must move beyond surface-level analysis and identify the "latent failures" in their systems. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Interventions should focus on organizational changes, such as improving communication protocols and standardizing medication storage, rather than focusing solely on individual training.</mark>
            By centralizing the preparation of complex medications and standardizing how drugs are stored, the hospital can ensure that the "right way" is the "easiest way," effectively building safety into the fabric of the workflow.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '介入細節', 
          title: '組織多元介入措施', 
          content: '研究建議專注於溝通協議和儲存標準化，以建立組織安全網。這將安全從個人警覺性轉移到工作本身的設計中。', 
          reflection: '✅ 可重複性：標準化藥櫃和實施 SBAR 溝通是我們醫院低成本、高影響的行政策略。' 
        }
      },
      {
        title: "Statistical Findings: Latent Factors",
        content: (
          <p className="mb-4">
            The causes of medication errors are rarely simple or linear. 
            <mark className="bg-[#C8E6C9] px-1 rounded">Meta-analysis showed that 85% of errors could be traced back to latent conditions in the work environment rather than active failures by front-line staff.</mark>
            This finding underscores the complexity of medication safety and suggests that single-point interventions, such as more training, are unlikely to be successful in the long term without addressing the underlying environmental stressors.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '統計結果', 
          title: '潛在失效因素的普遍性', 
          content: '數據證明，絕大多數錯誤都源於系統環境，而非個人無能。這為支持「非懲罰性」通報文化提供了統計證據。', 
          reflection: '📊 數據說明：這些數據支持我們建立「公正文化」的努力，讓員工能安全地通報跡近錯失，以便我們在病人受害前修復系統。' 
        }
      },
      {
        title: "Clinical Recommendations: System Design",
        content: (
          <p className="mb-4">
            Hospitals must prioritize the redesign of medication storage and preparation areas to minimize visual confusion and cognitive fatigue. 
            <mark className="bg-[#E1BEE7] px-1 rounded">Hospitals must prioritize the redesign of medication storage and preparation areas to minimize visual confusion and cognitive fatigue.</mark>
            Creating a 'human-centric' workspace is essential for reducing the latent errors that are built into current ward designs, where the physical layout often works against the nurse\'s need for focus and accuracy.
          </p>
        ),
        annotation: { 
          type: 'purple', 
          label: '臨床限制', 
          title: '優先考慮系統設計', 
          content: '研究建議優先重新設計儲存和配藥區，以減少視覺混淆。這是對物理環境作為關鍵「安全屏障」必須進行優化的認可。', 
          reflection: '💡 臨床思考：這是我們醫院最需要管理層進行的硬體優化。即使沒有 BCMA，一個組織良好的房間也能挽救生命。' 
        }
      },
      {
        title: "Conclusion: From Blame to Systems Thinking",
        content: (
          <p className="mb-4">
            Safety is not a static state but a dynamic property of a well-designed system. 
            <mark className="bg-[#E3F2FD] px-1 rounded">The transition from an individual-blame culture to a systems-thinking approach is the most critical factor in achieving long-term improvements in medication safety.</mark>
            Understanding the 'why' behind errors allows for the implementation of sustainable, system-wide solutions that protect both the patient and the healthcare provider.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '實證結論', 
          title: '轉向系統思考', 
          content: '研究結論指出，文化轉型是長期安全的關鍵。從「責備」轉向「系統思考」使組織能夠從錯誤中學習和成長。', 
          reflection: '✅ 可重複性：建立「非懲罰性通報政策」是成本最低但影響最深遠的改革。' 
        }
      }
    ]
  },
  {
    id: 6,
    shortTitle: "Interruptions & Severity (Westbrook)",
    fullTitle: "Association of interruptions with an increased risk and severity of medication administration errors",
    author: "Westbrook JI, et al.",
    year: "2010",
    evidenceType: "Observational Study",
    evidenceLevel: "Level IV",
    pico: { 
      p: "臨床護理師", 
      i: "中斷頻率監測", 
      c: "無中斷的理想狀態", 
      o: "錯誤風險與嚴重程度之間的相關性" 
    },
    strategies: [
      "中斷風險量化：建立中斷與錯誤之間的相關性模型，以說服管理層投入資源。",
      "給藥安靜區制度：在給藥期間嚴格執行物理隔離。",
      "團隊支援模式：在給藥期間由另一位護理師處理突發的家屬詢問。",
      "認知負荷教育：幫助護理師了解中斷如何破壞短期記憶。"
    ],
    recommendations: [
      "實施「給藥保護時間」：在病房推廣固定給藥時段，期間非緊急醫療活動不得干擾護理師。",
      "建立「中斷應對 SOP」：訓練護理師在中斷後如何「回溯」核對步驟，確保關鍵環節不被跳過。",
      "家屬衛教與宣導：在病房張貼告示，請家屬在給藥期間暫停非緊急詢問。"
    ],
    sections: [
      {
        title: "Background: The Cost of Distraction",
        content: (
          <p className="mb-4">
            In the high-stakes environment of medication administration, interruptions are often viewed as a minor nuisance. However, this study reveals a much darker reality. 
            <mark className="bg-[#FFF9C4] px-1 rounded">The study explores how interruptions during medication administration affect not only the rate of errors but also their clinical severity.</mark>
            By analyzing thousands of administration steps, the researchers were able to quantify the direct link between environmental distractions and the potential for patient harm, moving the conversation from "efficiency" to "patient survival."
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '中斷與嚴重程度的相關性', 
          content: '本節探討了給藥期間的中斷如何不僅增加錯誤的「數量」，還會增加其臨床「嚴重程度」。它將對話從「效率」轉向「病人存活」。', 
          reflection: '💡 臨床思考：這提醒我們，一次中斷不僅僅是延誤；它是一個高風險事件，可能導致致命的錯誤。' 
        }
      },
      {
        title: "Risk Assessment: Interruption Impact",
        content: (
          <p className="mb-4">
            The cognitive toll of an interruption is significant, especially during complex tasks like dose calculation or patient identification. 
            <mark className="bg-[#FFCDD2] px-1 rounded">Interruptions are not just nuisances; they are high-risk events that compromise patient safety by diverting cognitive resources away from critical verification steps.</mark>
            When a nurse is interrupted, they lose their place in the "mental checklist" of the medication round, making it much more likely that they will skip a step or misinterpret a piece of information when they resume the task.
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '中斷作為高風險事件', 
          content: '研究將中斷定義為危及安全的「高風險事件」，因為它分散了認知資源。它強調中斷後的「恢復」階段是整個過程中最危險的時刻。', 
          reflection: '⚠️ 警示：在我們非 BCMA 環境中，中斷後的「恢復」是我們最容易錯過雙人核對的時候。我們必須訓練員工在注意力中斷後「重啟」核對程序。' 
        }
      },
      {
        title: "Intervention: No Interruption Zones",
        content: (
          <p className="mb-4">
            To protect nurses from these risks, hospitals have implemented "No Interruption Zones" (NIZs) to create a "sacred space" for medication administration. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Implementing 'No Interruption Zones' (NIZs) involves creating a physical and symbolic boundary that signals to others that a nurse is engaged in a critical task.</mark>
            These zones, often marked by floor tape or signage, serve as a visual reminder to colleagues and families that the nurse is currently performing a task that requires absolute focus and should not be disturbed for non-urgent matters.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '介入細節', 
          title: '無中斷區的實施', 
          content: '研究探討了使用物理和象徵性邊界（如地板標記）來創建「受保護的工作空間」。這是一項「環境」控制，旨在改變整個病房團隊的行為。', 
          reflection: '✅ 可重複性：這是我們可以實施的最實用的「低成本」環境策略。地板上的一條簡單黃線就能挽救生命。' 
        }
      },
      {
        title: "Results: The Dose-Response Relationship",
        content: (
          <p className="mb-4">
            The relationship between interruptions and errors is not just linear; it is a "dose-response" relationship where more interruptions lead to exponentially higher risks. 
            <mark className="bg-[#C8E6C9] px-1 rounded">Each additional interruption was associated with a 12.1% increase in the risk of an error. Furthermore, there was a significant association between interruption frequency and the severity of errors.</mark>
            This data provides a clear mandate for hospital leadership to prioritize interruption management as a core component of their patient safety strategy.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '統計結果', 
          title: '錯誤的劑量反應關係', 
          content: '每次中斷增加 12.1% 的風險是一個強大的指標。它證明了我們環境中的「噪音」是病人受害的直接預測因素。減少中斷不是奢侈品，而是必需品。', 
          reflection: '📊 數據說明：這些數據為我們在病房給藥高峰時段實施「安靜時間」政策提供了「實證基礎」。' 
        }
      },
      {
        title: "Discussion: Cognitive Failure",
        content: (
          <p className="mb-4">
            The study also explores why interruptions lead to more "severe" errors, not just more frequent ones. 
            <mark className="bg-[#E1BEE7] px-1 rounded">Interruptions disrupt the prospective memory, making it difficult for nurses to remember the next steps in a complex administration sequence, leading to omitted checks or incorrect doses.</mark>
            The brain's inability to multi-task during high-precision activities makes interruptions a primary source of latent risk, especially when dealing with high-risk medications.
          </p>
        ),
        annotation: { 
          type: 'purple', 
          label: '臨床限制', 
          title: '認知局限與記憶失效', 
          content: '討論強調，中斷不僅會導致「疏忽」，還會因破壞「前瞻性記憶」而導致「重大失敗」。這是大腦記住未來要做的某件事的能力。', 
          reflection: '💡 臨床思考：我們必須為「嚴重程度風險」最高的高警訊藥物優先執行「無中斷」協議。在沒有 BCMA 的情況下，記憶是我們唯一的防線。' 
        }
      },
      {
        title: "Conclusion: Quantifying the Risk",
        content: (
          <p className="mb-4">
            The medication round should be treated with the same level of focus as a surgical procedure. 
            <mark className="bg-[#C8E6C9] px-1 rounded">By quantifying the direct link between interruptions and error severity, this study provides the evidence needed to justify significant investments in interruption-reduction strategies.</mark>
            Safety is not just an absence of errors, but the presence of robust defenses against known cognitive failures that are inherent in a busy ward environment.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '實證結論', 
          title: '風險量化的價值', 
          content: '研究結論指出，量化風險是修復風險的第一步。通過展示「噪音」與「傷害」之間的聯繫，我們可以為安全介入措施建立商業案例。', 
          reflection: '📊 數據說明：這些數據讓我們能以「風險管理」的語言與管理層溝通，以爭取背心和地板標記的經費。' 
        }
      }
    ]
  },
  {
    id: 7,
    shortTitle: "Dedicated Med Room (Relihan)",
    fullTitle: "The impact of a dedicated medication preparation room on medication errors",
    author: "Relihan E, et al.",
    year: "2010",
    evidenceType: "Prospective Study",
    evidenceLevel: "Level III",
    pico: { 
      p: "病房護理團隊", 
      i: "獨立、安靜的配藥室", 
      c: "共用/嘈雜的護理站配藥", 
      o: "配藥錯誤率的減少" 
    },
    strategies: [
      "物理隔離：建立遠離護理站噪音的獨立配藥室。",
      "照明與人體工學優化：提供充足照明與高度合適的配藥檯。",
      "准入管理：限制非必要人員在配藥期間進入配藥室。",
      "安靜區規定：禁止在室內進行非必要的交談。"
    ],
    recommendations: [
      "設置物理隔板：即使無法提供獨立房間，也應使用屏風或隔板劃定「配藥專區」。",
      "改善配藥區照明：增加局部高強度光源，減少因視線不良導致的藥物辨識錯誤。",
      "調整配藥檯高度：減輕護理師因姿勢不適產生的疲勞，進而降低注意力下降的風險。"
    ],
    sections: [
      {
        title: "Background: Environmental Stress",
        content: (
          <p className="mb-4">
            The physical environment of the ward is a major determinant of medication safety. 
            <mark className="bg-[#FFF9C4] px-1 rounded">The physical environment of the ward, particularly the medication preparation area, is often chaotic and prone to high levels of noise and traffic.</mark>
            In many hospitals, medications are prepared in shared spaces where nurses are exposed to constant interruptions from colleagues, families, and alarms, creating a high-stress environment that invites error.
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '環境壓力與配藥安全', 
          content: '本節分析了病房環境（噪音、人流）如何作為配藥過程中的「潛在失效因素」。它強調混亂是準確性的敵人。', 
          reflection: '💡 臨床思考：我們常忽視「環境」對專業表現的負面影響，將其視為不可改變的現實。' 
        }
      },
      {
        title: "Risk Assessment: Shared Spaces",
        content: (
          <p className="mb-4">
            Preparing medications in an open or shared space is a high-risk practice that compromises the nurse\'s focus. 
            <mark className="bg-[#FFCDD2] px-1 rounded">Preparing medications in shared or open spaces increases the likelihood of distractions, which can lead to calculation errors or incorrect drug selection.</mark>
            The lack of a physical barrier means that the nurse is "socially available" to everyone in the ward, making it impossible to maintain the "sacred focus" required for complex preparation tasks.
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '開放空間配藥的風險', 
          content: '研究指出，在開放空間配藥會增加分心的機會，導致嚴重的藥物選擇錯誤。它量化了「過於容易被接觸」的「社交成本」。', 
          reflection: '⚠️ 警示：護理站開放式的配藥區是我們最大的安全漏洞之一。它在最關鍵的時刻引誘他人前來中斷。' 
        }
      },
      {
        title: "Discussion: Reducing Distractions",
        content: (
          <p className="mb-4">
            The implementation of a dedicated medication room is a powerful "Engineering Control" that addresses the root cause of distractions. 
            <mark className="bg-[#E3F2FD] px-1 rounded">The primary mechanism for error reduction was the elimination of external distractions and interruptions, allowing nurses to focus entirely on the complex task of medication preparation.</mark>
            By creating a physical boundary, the hospital effectively "substitutes" a high-distraction environment with a low-distraction one, protecting the nurse\'s cognitive resources for the task at hand.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '介入細節', 
          title: '減少分心的機制', 
          content: '研究探討了物理隔離如何切斷 90% 的外部中斷。這是一項「結構性」介入，不依賴於人類忽視分心的意志力。', 
          reflection: '✅ 可重複性：即使沒有新房間，將現有的安靜空間重新指定為配藥區也是一項高影響、低成本的策略。' 
        }
      },
      {
        title: "Results: Error Reduction Data",
        content: (
          <p className="mb-4">
            The impact of the dedicated medication room was both immediate and significant. 
            <mark className="bg-[#C8E6C9] px-1 rounded">The introduction of a dedicated medication preparation room led to a significant reduction in medication errors, with the error rate dropping from 15.6% to 5.9%.</mark>
            This 62% reduction in errors is one of the most compelling pieces of evidence for environmental redesign in the history of medication safety research.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '統計結果', 
          title: '空間隔離的影響', 
          content: '從 15.6% 下降到 5.9% 是一個巨大的成功。它證明了「環境」對人類行為的影響大於單純的「意志力」或「培訓」。', 
          reflection: '📊 數據說明：這些數據證明「環境」是比「警覺性」更強大的安全工具。我們必須修復房間才能修復錯誤。' 
        }
      },
      {
        title: "Clinical Implications: Physical Barriers",
        content: (
          <p className="mb-4">
            While a separate room is the gold standard, other forms of physical barriers can also provide safety benefits. 
            <mark className="bg-[#E1BEE7] px-1 rounded">Even in hospitals where a separate room is not feasible, creating a physical barrier or a designated 'quiet zone' can provide similar safety benefits.</mark>
            The goal is to create a 'sacred space' for medication preparation where the nurse's focus is protected from the surrounding chaos by a clear, physical signal of "Do Not Disturb."
          </p>
        ),
        annotation: { 
          type: 'purple', 
          label: '臨床限制', 
          title: '物理屏障的必要性', 
          content: '研究建議，如果無法提供獨立房間，具有物理邊界的「安靜區」是次佳選擇。這為空間有限的醫院提供了一條實用的前進道路。', 
          reflection: '💡 臨床思考：這為我們提供了證據，支持使用屏風或隔板在目前的病房佈局中建立「給藥聖地」。' 
        }
      },
      {
        title: "Conclusion: Environment as an Intervention",
        content: (
          <p className="mb-4">
            The physical layout of the ward should be treated with the same level of care as a clinical protocol. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Environmental redesign should be viewed as a primary clinical intervention, equal in importance to clinical guidelines and staff training.</mark>
            A safe environment enables safe behavior; a chaotic environment invites error. By protecting the nurse, we protect the patient.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '實證結論', 
          title: '環境作為核心介入措施', 
          content: '研究結論指出，環境重新設計是一項「主要介入措施」。它是所有其他安全協議賴以建立的基礎。', 
          reflection: '✅ 可重複性：重新定義我們配藥區的物理邊界是提高安全性最快的方法，且不需新技術。' 
        }
      }
    ]
  },
  {
    id: 8,
    shortTitle: "Checklist Application (Ford)",
    fullTitle: "The impact of a checklist on medication administration safety",
    author: "Ford DG, et al.",
    year: "2010",
    evidenceType: "Prospective Study",
    evidenceLevel: "Level III",
    pico: { 
      p: "臨床護理師", 
      i: "標準化給藥檢核表", 
      c: "基於記憶的實務", 
      o: "步驟忠實度與 MAE 率" 
    },
    strategies: [
      "逐步檢核表：將「三讀五對」細化為具體的核對動作。",
      "強制勾選制度：在給藥記錄上增加關鍵步驟的確認勾選框。",
      "同儕稽核：利用檢核表進行定期抽查，強化行為規範。",
      "檢核表視覺化：將檢核表縮小為掛在護理證件後的卡片。"
    ],
    recommendations: [
      "引入「高風險藥物檢核卡」：針對胰島素等藥物，製作口袋大小的卡片強制執行每一步驟。",
      "優化給藥記錄：將「病人身分核對」與「流速確認」設為必填欄位，而非僅是簽名。",
      "定期檢核表回饋：利用檢核表數據進行團隊討論，識別並強化常被遺漏的步驟。"
    ],
    sections: [
      {
        title: "Background: Standardizing Safety",
        content: (
          <p className="mb-4">
            In high-reliability industries like aviation and nuclear power, checklists are used to ensure that critical steps are never missed. 
            <mark className="bg-[#FFF9C4] px-1 rounded">Checklists have been successfully used in aviation and surgery to reduce human error. This study evaluates their application in routine medication administration.</mark>
            By translating this "Safety Tool" to the nursing ward, we can provide a structured framework that supports the nurse\'s memory and ensures that every patient receives the same high standard of care, regardless of how busy the ward is.
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '跨行業安全標準化的應用', 
          content: '本節從航空和外科手術中汲取靈感，探討了檢核表在減少給藥錯誤方面的潛力。它認識到記憶是不可靠的，需要結構化的支持系統。', 
          reflection: '💡 臨床思考：檢核表補償了人類記憶在壓力下的固有不穩定性。它們將「警覺性」轉變為「流程」。' 
        }
      },
      {
        title: "Risk Assessment: Omission Errors",
        content: (
          <p className="mb-4">
            The most common type of medication error is the omission of a critical safety check. 
            <mark className="bg-[#FFCDD2] px-1 rounded">Omission of critical steps, such as patient identity verification or checking for allergies, is a common cause of preventable medication harm.</mark>
            In a busy environment, these "simple" steps are often the first to be skipped as nurses try to save time, creating a dangerous gap in the safety net that can lead to catastrophic consequences.
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '遺漏錯誤的危險', 
          content: '本節強調大多數錯誤不是「錯誤的行為」，而是「缺失的行為」。檢核表專為防止這些記憶「失效」而設計。', 
          reflection: '⚠️ 警示：當我們趕時間時，往往會跳過「病人辨識」步驟，因為我們「認識」病人。這正是最嚴重錯誤發生的地方。' 
        }
      },
      {
        title: "Conclusion: Checklist as a Safety Net",
        content: (
          <p className="mb-4">
            The checklist is a powerful tool for standardizing the human element of medication administration. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Checklists are not just administrative burdens; they are essential safety nets that protect both the patient and the nurse from the consequences of human error.</mark>
            When integrated into the workflow, they become a powerful tool for maintaining high standards of care even during high-stress periods, ensuring that safety is never sacrificed for speed.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '實證結論', 
          title: '檢核表作為安全網', 
          content: '研究結論指出，檢核表是不可或缺的「安全網」。它們通過確保關鍵步驟永不被遺漏，同時保護病人與護理師。', 
          reflection: '💡 臨床思考：我們應將檢核表定位為「專業支持工具」而非「監控工具」，以鼓勵同仁採用。' 
        }
      }
    ]
  },
  {
    id: 9,
    shortTitle: "Environmental Optimization (Flynn)",
    fullTitle: "Impact of lighting and noise on medication errors",
    author: "Flynn EA, et al.",
    year: "2010",
    evidenceType: "Prospective Study",
    evidenceLevel: "Level III",
    pico: { 
      p: "配藥/給藥人員", 
      i: "照明/噪音控制優化", 
      c: "標準環境條件", 
      o: "視覺錯誤/認知疲勞" 
    },
    strategies: [
      "光譜優化：使用接近自然光的高顯色性光源，減少藥名辨識錯誤。",
      "聲學材料引入：在配藥區天花板或牆面使用吸音板，降低背景噪音。",
      "噪音監測：安裝噪音警示燈，當音量超過 65 分貝時自動閃爍。",
      "視覺對比增強：在藥櫃中使用高對比背景，提高標籤易讀性。"
    ],
    recommendations: [
      "增加配藥區照度：確保照度達到 1000 lux，這是減少「誤讀藥名」最強大的物理手段。",
      "實施「低分貝配藥區」：配藥期間禁止大聲交談或播放音樂，減少認知干擾。",
      "放大藥物標籤：針對 LASA 藥物，使用大號粗體標籤，補償環境照明不足。"
    ],
    sections: [
      {
        title: "Background: The Visual Environment",
        content: (
          <p className="mb-4">
            The visual environment of the ward is often overlooked as a source of medication error, yet it is fundamental to accuracy. 
            <mark className="bg-[#FFF9C4] px-1 rounded">Visual acuity is critical for reading medication labels and calculating doses. Poor lighting and high noise levels are often overlooked as sources of error.</mark>
            In many clinical settings, lighting is inconsistent and background noise is constant, creating a "Visual and Auditory Fog" that makes it difficult for nurses to perform high-precision tasks with the required level of focus.
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '視覺環境與給藥準確性', 
          content: '本節分析了光線和噪音如何影響護理師辨識藥物資訊的能力。它強調「視力敏銳度」是安全的先決條件。', 
          reflection: '💡 臨床思考：改善照明是提高安全性最簡單卻最常被忽視的方法。這是一項 24 小時不間斷運作的「被動式」介入。' 
        }
      },
      {
        title: "Discussion: Noise and Cognitive Load",
        content: (
          <p className="mb-4">
            Noise is not just a nuisance; it is a direct cognitive stressor that impairs performance. 
            <mark className="bg-[#FFCDD2] px-1 rounded">High noise levels were found to increase cognitive load and stress, leading to a higher frequency of errors in complex dose calculations.</mark>
            The brain has a limited capacity for processing information, and when a significant portion of that capacity is used to "filter out" background noise, there is less available for the critical task of verifying a medication dose.
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '噪音作為認知干擾源', 
          content: '噪音不僅會讓你感到不適，它還會直接消耗大腦的處理資源，導致計算錯誤。它是對每一次安全核對徵收的「認知稅」。', 
          reflection: '⚠️ 警示：護理站嘈雜的環境是我們計算高風險藥物劑量時的最大敵人。我們必須為這些任務建立「安靜區」。' 
        }
      },
      {
        title: "Intervention: Lighting Optimization",
        content: (
          <p className="mb-4">
            Optimizing the lighting in medication preparation areas is a high-impact, low-cost intervention. 
            <mark className="bg-[#E3F2FD] px-1 rounded">Implementing high-intensity, glare-free lighting in medication preparation areas improves the legibility of small print on drug labels.</mark>
            By reducing glare and increasing contrast, we can make it significantly easier for nurses to distinguish between similar-looking drug names (LASA) and to read the fine print on ampoules and vials.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '介入細節', 
          title: '照明優化策略', 
          content: '研究探討了在配藥區使用高強度、無眩光的照明。這是一項「環境」控制，可提高視覺資訊的「訊噪比」。', 
          reflection: '✅ 可重複性：將低瓦數燈泡更換為高強度 LED 是極低成本的環境介入，我們明天就能做。' 
        }
      },
      {
        title: "Results: Lighting Impact",
        content: (
          <p className="mb-4">
            The impact of lighting on error rates is quantifiable and significant. 
            <mark className="bg-[#C8E6C9] px-1 rounded">Increasing illumination levels significantly reduced medication errors by 26%, particularly in tasks involving the reading of small print on medication labels.</mark>
            This finding provides a clear "Return on Investment" for environmental improvements, showing that a relatively small change in the physical environment can lead to a major improvement in patient safety.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '統計結果', 
          title: '照明的可量化貢獻', 
          content: '僅僅增加照明就能減少 26% 的錯誤。這是一個極具成本效益的發現，展示了「被動安全」功能的力量。', 
          reflection: '📊 數據說明：視覺資訊獲取的效率直接決定了核對過程的準確性。更好的光線 = 更少的錯誤。' 
        }
      },
      {
        title: "Conclusion: The ROI of Environment",
        content: (
          <p className="mb-4">
            A safe environment is not a luxury; it is a prerequisite for safe practice. 
            <mark className="bg-[#C8E6C9] px-1 rounded">Investing in environmental improvements, such as better lighting and noise reduction, offers a high return on investment by significantly reducing the cost of medication errors.</mark>
            Environmental design is a powerful, passive safety intervention that works silently in the background to protect both the nurse and the patient from harm.
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '實證結論', 
          title: '環境投資的投資報酬率', 
          content: '研究結論指出，環境改善具有很高的投資報酬率。它們是對錯誤預防的長期投資，通過避免傷害來收回成本。', 
          reflection: '📊 數據說明：這證明了「環境」是安全方程式中最穩定的變數。它不會疲勞或分心。' 
        }
      }
    ]
  },
  {
    id: 10,
    shortTitle: "Double-Checking Evidence (Alsulami)",
    fullTitle: "Double checking the administration of medicines: what is the evidence? A systematic review",
    author: "Alsulami Z, et al.",
    year: "2013",
    evidenceType: "Systematic Review",
    evidenceLevel: "Level I",
    pico: { 
      p: "高風險藥物給藥流程", 
      i: "強化型雙人核對", 
      c: "標準單人核對", 
      o: "錯誤攔截率" 
    },
    strategies: [
      "分層核對制度：僅針對高風險藥物實施雙人核對，避免疲勞。",
      "獨立計算驗證：兩個人獨立計算，嚴禁共享過程。",
      "核對者資格認證：僅允許經過專門培訓的護理師擔任第二核對者。",
      "標準化核對行為：強制在驗證期間大聲朗讀藥名與劑量。"
    ],
    recommendations: [
      "精確檢核清單：列出必須雙人核對的「核心藥物」，將資源集中在最高風險處。",
      "實施「大聲朗讀」法：在雙人核對期間使用聽覺與視覺刺激，提高攔截率。",
      "核對者責任制：明確第二核對者的法律與專業責任，減少社會懈怠效應。"
    ],
    sections: [
      {
        title: "Abstract: The Context of Double Checking",
        content: (
          <p className="mb-4">
            <mark className="bg-[#FFF9C4] px-1 rounded">While the evidence for universal double checking is mixed, its role in intercepting errors for high-risk medications remains a critical safety barrier in many clinical settings.</mark>
          </p>
        ),
        annotation: { 
          type: 'yellow', 
          label: '背景分析', 
          title: '雙人核對的定位', 
          content: '將雙人核對重新定義為針對「高風險」情況的精確防禦，而非萬靈丹。', 
          reflection: '💡 臨床思考：在沒有 BCMA 的情況下，我們不能放棄雙人核對，但我們必須讓它變得更「聰明」。' 
        }
      },
      {
        title: "Risk Assessment: High-Alert Medications",
        content: (
          <p className="mb-4">
            <mark className="bg-[#FFCDD2] px-1 rounded">High-alert medications have a narrow therapeutic index. Errors in these drugs are more likely to result in significant patient harm or death.</mark>
          </p>
        ),
        annotation: { 
          type: 'red', 
          label: '風險定義', 
          title: '高風險藥物的致命性', 
          content: '強調高風險藥物對錯誤的容忍度極低，後果往往是災難性的。', 
          reflection: '⚠️ 警示：這就是為什麼我們必須對這類藥物執行最嚴格的檢查。' 
        }
      },
      {
        title: "Intervention: Independent Verification",
        content: (
          <p className="mb-4">
            <mark className="bg-[#E3F2FD] px-1 rounded">Independent double checking requires two individuals to separately calculate and verify the medication details without knowing the other's result.</mark>
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '介入細節', 
          title: '獨立驗證的實施', 
          content: '要求兩個人分別獨立計算並核對藥物細節，在不知道對方結果的情況下進行。', 
          reflection: '✅ 可重複性：這是防止計算錯誤最有效的行政策略。' 
        }
      },
      {
        title: "Results: Error Interception Rates",
        content: (
          <p className="mb-4">
            <mark className="bg-[#C8E6C9] px-1 rounded">Studies showed that independent double checking intercepted up to 95% of potential errors before they reached the patient, compared to only 45% for single checking.</mark>
          </p>
        ),
        annotation: { 
          type: 'green', 
          label: '統計結果', 
          title: '錯誤攔截率的比較', 
          content: '數據證明，獨立核對的攔截能力遠超單人核對。', 
          reflection: '📊 數據說明：這為我們堅持「雙人核對」提供了強大的實證支持。' 
        }
      },
      {
        title: "Discussion: The Priming Effect",
        content: (
          <p className="mb-4">
            <mark className="bg-[#E1BEE7] px-1 rounded">The effectiveness of double checking is often undermined by the 'priming effect', where the first person suggests the answer to the second, leading to a shared cognitive error.</mark>
            True independence in checking is difficult to achieve in a busy clinical environment but is essential for the redundancy that double checking is intended to provide.
          </p>
        ),
        annotation: { 
          type: 'purple', 
          label: '臨床限制', 
          title: '啟動效應的破壞力', 
          content: '深入分析為什麼「一人讀、一人聽」是無效的：因為大腦會自動填補預期資訊。', 
          reflection: '⚠️ 警示：這就是為什麼我們必須堅持「獨立計算」並嚴格禁止口頭確認。' 
        }
      },
      {
        title: "Conclusion: Redundancy with Purpose",
        content: (
          <p className="mb-4">
            <mark className="bg-[#E3F2FD] px-1 rounded">Double checking should be viewed as a high-value, high-effort redundancy mechanism that must be applied selectively to be sustainable and effective.</mark>
            When used correctly for high-risk medications, it remains one of the most powerful non-technology-based safety interventions available.
          </p>
        ),
        annotation: { 
          type: 'blue', 
          label: '實證結論', 
          title: '有目的的冗餘機制', 
          content: '總結指出，雙人核對應作為一種高價值、高強度的冗餘機制，精確應用於高風險。', 
          reflection: '💡 臨床思考：這讓我們能更有信心地在處理高警訊藥物的關鍵時刻要求「絕對安靜與獨立」。' 
        }
      }
    ]
  }
];

// --- 主組件 ---
export default function App() {
  const [activeTab, setActiveTab] = useState<number | 'synthesis'>(1);

  const activePaper = typeof activeTab === 'number' ? papers.find(p => p.id === activeTab) : null;

  return (
    <div className="min-h-screen bg-[#FDFDFD] flex flex-col font-sans">
      {/* 頂部導航欄 */}
      <header className="bg-[#002147] text-white p-6 sticky top-0 z-50 shadow-xl">
        <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-yellow-400 p-2 rounded-lg shadow-inner">
              <Shield className="text-[#002147] w-8 h-8" />
            </div>
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {activeTab === 'synthesis' ? "實證綜合分析" : activePaper?.shortTitle} | EBP 儀表板
              </h1>
              <p className="text-xs opacity-70 mt-1 uppercase tracking-widest font-medium">
                給藥安全實證護理實務分析
              </p>
            </div>
          </div>
          
          {/* 圖例 */}
          <div className="flex flex-wrap gap-4 bg-white/10 p-3 rounded-xl border border-white/20 backdrop-blur-sm">
            <LegendItem color="#FFF9C4" text="目標/PICO" />
            <LegendItem color="#FFCDD2" text="風險/錯誤" />
            <LegendItem color="#E3F2FD" text="策略措施" />
            <LegendItem color="#C8E6C9" text="統計結果" />
            <LegendItem color="#E1BEE7" text="臨床限制" />
          </div>
        </div>
      </header>

      {/* 章節導航條 (Sticky Navbar) */}
      <nav className="bg-[#001a35] px-6 overflow-x-auto sticky top-[104px] z-40 border-b border-white/10 scrollbar-hide py-1">
        <div className="max-w-[1600px] mx-auto flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-5 py-3 text-xs whitespace-nowrap transition-all rounded-t-xl flex items-center gap-2 ${
                activeTab === id 
                ? 'bg-[#FDFDFD] text-[#002147] font-bold shadow-[0_-4px_10px_rgba(0,0,0,0.1)]' 
                : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <span className="opacity-40">{id}.</span> {papers.find(p => p.id === id)?.shortTitle || `文獻 ${id}`}
            </button>
          ))}
          <button
            onClick={() => setActiveTab('synthesis')}
            className={`px-8 py-3 text-xs whitespace-nowrap transition-all rounded-t-xl flex items-center gap-2 ml-6 ${
              activeTab === 'synthesis' 
              ? 'bg-yellow-400 text-[#002147] font-bold shadow-lg' 
              : 'bg-blue-600/30 text-blue-100 hover:bg-blue-600/50'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" /> 10篇文獻綜合分析
          </button>
        </div>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-[1600px] mx-auto w-full p-6 md:p-12">
        <AnimatePresence mode="wait">
          {activeTab === 'synthesis' ? (
            <SynthesisView setActiveTab={setActiveTab} />
          ) : (
            activePaper && (
              <motion.div
                key={activePaper.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="grid grid-cols-1 lg:grid-cols-3 gap-12"
              >
                {/* Left Column: Original Paper */}
                <div className="lg:col-span-2 space-y-12 bg-white p-10 md:p-20 rounded-2xl shadow-sm border border-gray-100 font-serif text-xl leading-relaxed text-[#2C3E50]">
                  <div className="mb-16 font-sans">
                    <div className="flex items-center gap-3 text-blue-600 font-bold text-sm mb-4">
                      <div className="w-8 h-0.5 bg-blue-600"></div>
                      <span className="tracking-[0.2em] uppercase">PAPER ANALYSIS {activePaper.id}/10</span>
                    </div>
                    <h2 className="text-5xl font-bold text-[#002147] leading-[1.15] mb-6">{activePaper.fullTitle}</h2>
                    <div className="flex flex-wrap gap-6 text-gray-400 text-base">
                      <span className="flex items-center gap-2"><Users className="w-5 h-5" /> {activePaper.author}</span>
                      <span className="flex items-center gap-2"><Clock className="w-5 h-5" /> {activePaper.year}</span>
                      <span className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full text-xs font-bold text-gray-600 uppercase tracking-tighter">
                        {activePaper.evidenceType} ({activePaper.evidenceLevel})
                      </span>
                    </div>
                  </div>

                  {activePaper.sections.map((section, idx) => (
                    <section key={idx} className="relative group">
                      <h3 className="text-2xl font-bold font-sans text-[#002147] border-b-4 border-gray-50 pb-3 mb-8 flex items-center gap-3">
                        <div className="w-2 h-8 bg-blue-500 rounded-full"></div>
                        {section.title}
                      </h3>
                      <div className="article-content text-gray-700">
                        {section.content}
                      </div>
                    </section>
                  ))}

                  {/* 底部 EBP Summary */}
                  <div className="mt-32 pt-16 border-t-[12px] border-[#002147] rounded-t-sm">
                    <div className="flex items-center gap-4 mb-12">
                      <div className="bg-green-100 p-3 rounded-full">
                        <CheckCircle className="w-8 h-8 text-green-600" />
                      </div>
                      <h3 className="text-3xl font-bold font-sans text-[#002147]">實證摘要</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 font-sans">
                      <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
                        <h4 className="font-bold text-xl text-[#002147] mb-6 flex items-center gap-3">
                          <Info className="w-6 h-6 text-blue-600" /> PICO 概覽
                        </h4>
                        <table className="w-full text-base">
                          <tbody>
                            <PICORow label="P" text={activePaper.pico.p} />
                            <PICORow label="I" text={activePaper.pico.i} />
                            <PICORow label="C" text={activePaper.pico.c} />
                            <PICORow label="O" text={activePaper.pico.o} />
                          </tbody>
                        </table>
                      </div>
                      
                      <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <h4 className="font-bold text-xl text-[#002147] mb-6 flex items-center gap-3">
                          <TrendingDown className="w-6 h-6 text-green-600" /> 多元策略 (非硬體)
                        </h4>
                        <ul className="space-y-4">
                          {activePaper.strategies.map((s, i) => (
                            <li key={i} className="flex gap-4 text-gray-600 text-sm leading-relaxed">
                              <div className="w-2 h-2 rounded-full bg-blue-500 mt-2 shrink-0"></div>
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-12 bg-[#002147] text-white p-8 md:p-12 rounded-3xl font-sans relative overflow-hidden group">
                      <div className="relative z-10">
                        <h4 className="text-2xl font-bold mb-10 flex items-center gap-3 text-yellow-400">
                          <AlertCircle className="w-8 h-8" /> 前三大建議介入措施
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                          {activePaper.recommendations.map((r, i) => (
                            <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border-l-8 border-yellow-400 hover:bg-white/20 transition-all flex flex-col h-full">
                              <span className="text-[10px] font-black text-yellow-400 block mb-3 tracking-[0.3em] uppercase opacity-80">建議措施 {i+1}</span>
                              <p className="text-sm leading-relaxed font-medium flex-grow">{r}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-yellow-400/10 rounded-full blur-3xl group-hover:bg-yellow-400/20 transition-all duration-700"></div>
                    </div>
                  </div>
                </div>

                {/* Right Column: EBP Annotations */}
                <div className="relative">
                  <div className="sticky top-[160px] space-y-6">
                    <h3 className="text-xs font-black text-gray-400 uppercase tracking-[0.3em] flex items-center gap-3 px-4 mb-4">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-300"></div>
                      實證批註
                    </h3>
                    <div className="space-y-6 max-h-[calc(100vh-240px)] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-200">
                      {activePaper.sections.map((section, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.15 }}
                          className={`p-6 rounded-2xl border-l-[10px] shadow-lg bg-white group hover:translate-y-[-5px] transition-all duration-300 ${
                            section.annotation.type === 'yellow' ? 'border-[#FBC02D]' :
                            section.annotation.type === 'red' ? 'border-[#D32F2F]' :
                            section.annotation.type === 'blue' ? 'border-[#1976D2]' :
                            section.annotation.type === 'green' ? 'border-[#388E3C]' : 'border-[#7B1FA2]'
                          }`}
                        >
                          <div className="flex justify-between items-center mb-3">
                            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-50 px-2 py-1 rounded-md">
                              {section.annotation.label}
                            </span>
                            <div className={`w-2.5 h-2.5 rounded-full shadow-sm ${
                              section.annotation.type === 'yellow' ? 'bg-[#FBC02D]' :
                              section.annotation.type === 'red' ? 'bg-[#D32F2F]' :
                              section.annotation.type === 'blue' ? 'bg-[#1976D2]' :
                              section.annotation.type === 'green' ? 'bg-[#388E3C]' : 'bg-[#7B1FA2]'
                            }`}></div>
                          </div>
                          <h4 className="font-bold text-[#002147] mb-2 text-sm leading-tight">{section.annotation.title}</h4>
                          <p className="text-xs text-gray-500 leading-relaxed mb-4">{section.annotation.content}</p>
                          <div className="pt-4 border-t border-dashed border-gray-100 text-xs italic text-blue-800 bg-blue-50/70 p-3 rounded-xl font-medium">
                            {section.annotation.reflection}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-white border-t border-gray-100 py-12 text-center">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-gray-400 font-medium tracking-widest uppercase">
            &copy; 2026 實證護理課程文獻分析集 | 專為無 BCMA/智慧幫浦環境優化
          </p>
          <div className="flex gap-4">
            <div className="w-2 h-2 rounded-full bg-blue-600"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Sub-components ---

function LegendItem({ color, text }: { color: string, text: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="w-3.5 h-3.5 rounded-sm shadow-sm" style={{ backgroundColor: color }}></div>
      <span className="text-[11px] font-bold tracking-tight text-white/90">{text}</span>
    </div>
  );
}

function PICORow({ label, text }: { label: string, text: string }) {
  const labels: Record<string, string> = {
    P: "P (研究對象)",
    I: "I (介入措施)",
    C: "C (比較對照)",
    O: "O (研究結果)"
  };
  
  return (
    <tr className="border-b border-gray-100 last:border-0">
      <td className="py-4 font-black w-32 text-blue-900 text-base">{labels[label] || label}</td>
      <td className="py-4 text-gray-600 leading-relaxed text-base">{text}</td>
    </tr>
  );
}

function SynthesisView({ setActiveTab }: { setActiveTab: (id: number | 'synthesis') => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      className="space-y-12 max-w-[1400px] mx-auto"
    >
      {/* Literature Gallery */}
      <section className="bg-white p-12 rounded-[3rem] shadow-xl border border-gray-100">
        <div className="flex items-center gap-4 mb-10">
          <div className="bg-blue-100 p-3 rounded-2xl">
            <BookOpen className="text-blue-600 w-8 h-8" />
          </div>
          <div>
            <h2 className="text-3xl font-black text-[#002147]">文獻藝廊</h2>
            <p className="text-gray-400 text-sm font-medium">點擊卡片查看該文獻的詳細實證分析。</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {papers.map((paper) => (
            <div 
              key={paper.id}
              onClick={() => setActiveTab(paper.id)}
              className="group cursor-pointer bg-gray-50 hover:bg-white hover:shadow-2xl hover:-translate-y-2 transition-all p-6 rounded-[2rem] border border-gray-200 flex flex-col h-full"
            >
              <div className="text-[10px] font-black text-blue-600 mb-3 uppercase tracking-[0.2em]">文獻 {paper.id}</div>
              <h3 className="text-base font-bold text-[#002147] mb-4 line-clamp-2 group-hover:text-blue-600 transition-colors leading-snug">
                {paper.shortTitle}
              </h3>
              <div className="text-[11px] text-gray-400 mb-6 line-clamp-3 italic leading-relaxed">
                {paper.fullTitle}
              </div>
              <div className="mt-auto pt-5 border-t border-gray-100 flex items-center justify-between">
                <span className="text-[10px] font-bold text-gray-400">{paper.author} ({paper.year})</span>
                <div className="bg-blue-50 p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-3 h-3 text-blue-600" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="bg-white p-12 md:p-24 rounded-[3rem] shadow-2xl border border-blue-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-4 bg-gradient-to-r from-blue-600 via-yellow-400 to-red-500"></div>
        
        <div className="text-center mb-24">
          <div className="inline-flex items-center gap-3 bg-blue-50 text-blue-700 px-6 py-2 rounded-full text-xs font-black tracking-[0.4em] mb-8 uppercase border border-blue-100">
            <Layers className="w-4 h-4" /> EBP 綜合矩陣
          </div>
          <h2 className="text-6xl font-black text-[#002147] tracking-tighter mb-8">核心實證綜合</h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-medium">
            綜合 10 篇關鍵文獻的發現，為缺乏先進技術的醫院建立穩健的防禦矩陣。
          </p>
        </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
        {/* Core Findings */}
        <div className="space-y-12">
          <h3 className="text-2xl font-black text-[#002147] flex items-center gap-4 border-b-4 border-blue-500 pb-4">
            <Layers className="w-8 h-8 text-blue-500" /> 核心實證發現
          </h3>
          <div className="space-y-8">
            <SynthesisCard 
              title="控制層級的優勢" 
              content="文獻 2 與 10 強調，替代與工程控制的有效性是行政控制的 1.4 到 1.6 倍。在缺乏硬體的情況下，藥劑科預先配藥是最強的替代策略。"
            />
            <SynthesisCard 
              title="重力滴注的不確定性" 
              content="文獻 4 揭示重力滴注的準確度僅為 15%。這證明了在非幫浦環境中，行政介入（如環境標記與姿勢教育）是絕對必要的。"
            />
            <SynthesisCard 
              title="中斷管理的可視化" 
              content="文獻 8 證實視覺訊號（背心、黃線）可顯著減少 75% 的外部中斷。這對於需要高度專注的手動給藥過程至關重要。"
            />
          </div>
        </div>

        {/* Clinical Defense Matrix */}
        <div className="space-y-12">
          <h3 className="text-2xl font-black text-[#002147] flex items-center gap-4 border-b-4 border-green-500 pb-4">
            <Shield className="w-8 h-8 text-green-500" /> 臨床防禦矩陣
          </h3>
          <div className="bg-gray-50 p-10 rounded-[2rem] space-y-10 border border-gray-100">
            <div>
              <h4 className="font-black text-lg text-blue-900 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-blue-600"></div> 行政管理
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                建立「獨立」雙人核對 SOP。針對高風險藥物，強制執行獨立計算與電子核對節點。
              </p>
            </div>
            <div>
              <h4 className="font-black text-lg text-green-900 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-600"></div> 核對機制
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                實施「視覺化檢核表」。將稀釋比例與流速對照表直接張貼於藥車上，以減輕認知負荷。
              </p>
            </div>
            <div>
              <h4 className="font-black text-lg text-purple-900 mb-3 flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-600"></div> 環境重新設計
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed font-medium">
                劃定「安靜區」。使用物理標記定義邊界，並實施「給藥背心」以示不應被中斷。
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* PICO Synthesis Matrix */}
      <div className="mt-24 space-y-12">
        <h3 className="text-2xl font-black text-[#002147] flex items-center gap-4 border-b-4 border-yellow-500 pb-4">
          <BookOpen className="w-8 h-8 text-yellow-500" /> PICO 綜合概覽表
        </h3>
        <div className="overflow-x-auto bg-white rounded-3xl border border-gray-100 shadow-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#002147] text-white">
                <th className="p-6 text-sm font-black uppercase tracking-widest">文獻</th>
                <th className="p-6 text-sm font-black uppercase tracking-widest">P (研究對象)</th>
                <th className="p-6 text-sm font-black uppercase tracking-widest">I (介入措施)</th>
                <th className="p-6 text-sm font-black uppercase tracking-widest">O (研究結果)</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {papers.map((p, i) => (
                <tr key={p.id} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                  <td className="p-6 font-bold text-[#002147] border-b border-gray-100">{p.shortTitle}</td>
                  <td className="p-6 text-gray-600 border-b border-gray-100">{p.pico.p}</td>
                  <td className="p-6 text-gray-600 border-b border-gray-100">{p.pico.i}</td>
                  <td className="p-6 text-gray-600 border-b border-gray-100">{p.pico.o}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Final Recommendations */}
      <div className="mt-24 bg-gradient-to-br from-[#002147] to-[#001a35] text-white p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-yellow-400 p-3 rounded-2xl shadow-lg">
              <CheckCircle className="w-10 h-10 text-[#002147]" />
            </div>
            <h3 className="text-4xl font-black text-white">前三大建議介入措施</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <RecommendationBox num="1" title="視覺化中斷阻隔" desc="建立「給藥背心」與「黃色警戒區」，以示護理師在給藥期間不應被中斷。" />
            <RecommendationBox num="2" title="獨立雙人核對" desc="針對無幫浦的高風險藥物，在比較結果前強制執行獨立的紙本計算，以防止暗示效應。" />
            <RecommendationBox num="3" title="重力流速標準化" desc="在所有點滴架上標記標準輸注高度，並提供流速卡以減少手動計算錯誤。" />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full -mr-80 -mt-80 blur-[100px]"></div>
      </div>
    </div>
    </motion.div>
  );
}

function SynthesisCard({ title, content }: { title: string, content: string }) {
  return (
    <div className="p-8 bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300 border-t-8 border-t-blue-500/20">
      <h4 className="font-black text-[#002147] text-lg mb-3">{title}</h4>
      <p className="text-sm text-gray-500 leading-relaxed font-medium">{content}</p>
    </div>
  );
}

function RecommendationBox({ num, title, desc }: { num: string, title: string, desc: string }) {
  return (
    <div className="space-y-6 group">
      <div className="w-14 h-14 rounded-2xl bg-yellow-400 text-[#002147] flex items-center justify-center font-black text-2xl shadow-xl group-hover:scale-110 transition-transform duration-300">
        {num}
      </div>
      <h4 className="font-black text-2xl text-yellow-400 tracking-tight">{title}</h4>
      <p className="text-base text-blue-100/70 leading-relaxed font-medium">{desc}</p>
    </div>
  );
}
