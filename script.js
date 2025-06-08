const data = {
  questionsAndAnswers: [
    {
      question: "למה הצילום מטושטש מאוד",
      answer: [
        "אולי הרקע כהה מדי או שהאור לא מספיק חזק.",
        "אם הצילום מטושטש מאוד, ייתכן שהמצלמה לא ממוקדת כראוי או שהאובייקט בתנועה מהירה. כדאי לבדוק את הגדרות המיקוד ולוודא שהמצלמה יציבה.",
      ],
    },
    {
      question: "איך אני יכול לשפר את איכות הצילום",
      answer: [
        "נסה להשתמש באור טבעי או להוסיף תאורה נוספת.",
        "כדי לשפר את איכות הצילום, ניתן להשתמש בתאורה טובה יותר, לוודא שהמצלמה ממוקדת כראוי ולהשתמש בחצובה כדי למנוע רעידות.",
      ],
    },
    {
      question: "איזה מצלמות CANON מדגם R עדיפות ומה ההבדלים ביניהן",
      answer: [
        "הדגמים המומלצים הם R5, R6 ו-R3, כל אחד מהם מציע יתרונות שונים.",
        "הדגם R5 מציע רזולוציה גבוהה של 45 מגה פיקסל, מה שהופך אותו לאידיאלי לצילומי נוף ודיוקנאות. הדגם R6 מציע ביצועים טובים בתנאי תאורה נמוכה עם רזולוציה של 20 מגה פיקסל, והוא מצוין לצילום ספורט ואירועים. הדגם R3 מיועד לצלמים מקצועיים ומציע מהירות ירי גבוהה מאוד עם טכנולוגיית מיקוד מתקדמת.",
      ],
    },
    {
      question: "בתצוגה מפורטת לא מופיעים לי התמונות",
      answer: [
        "ייתכן שהקבצים לא נתמכים או שיש בעיה בהעלאתם.",
        "אם בתצוגה מפורטת לא מופיעים התמונות, כדאי לבדוק אם הקבצים בפורמט נתמך (כגון JPEG או PNG) ולוודא שהקבצים לא פגומים. אם הבעיה נמשכת, ניתן לנסות להעלות את התמונות מחדש או לפנות לתמיכה טכנית של האתר שבו אתה מנסה להציג את התמונות.",
      ],
    },
    {
      question: "הודעות שגיאה",
      answer: [
        "אם יש הודעות שגיאה, בדוק את החיבורים ואת הגדרות המצלמה.",
        "אם יש הודעות שגיאה, כדאי לבדוק את החיבורים של המצלמה, לוודא שהכרטיס זיכרון תקין ולבדוק את הגדרות המצלמה. אם הבעיה נמשכת, ייתכן שיש צורך לעדכן את התוכנה של המצלמה או לפנות לתמיכה טכנית.",
      ],
    },
  ],
};

// קוד לעיבוד הנתונים כשהדף נטען
document.addEventListener("DOMContentLoaded", function () {
  // קבלת האלמנט של האקורדיון
  const accordion = document.getElementById("accordionExample");

  // ניקוי האקורדיון מתוכן קיים
  accordion.innerHTML = "";

  // יצירת אלמנטים לאקורדיון מהנתונים
  data.questionsAndAnswers.forEach((item, index) => {
    // יצירת אלמנט חדש לאקורדיון
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";

    // בדיקה אם זה האלמנט הראשון (יהיה פתוח כברירת מחדל)
    const isFirstItem = index === 0;

    // יצירת HTML לאלמנט של האקורדיון
    accordionItem.innerHTML = `
      <h2 class="accordion-header">
        <button
          class="accordion-button fw-bold ${isFirstItem ? "" : "collapsed"}"
          style="background-color: #b2914e; color: #fff;"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse${index}"
          aria-expanded="${isFirstItem ? "true" : "false"}"
          aria-controls="collapse${index}"
        >
          ${item.question}
        </button>
      </h2>
      <div
        id="collapse${index}"
        class="accordion-collapse collapse ${isFirstItem ? "show" : ""}"
                  style="background-color: #f7f5f3; color: #121212;"

        data-bs-parent="#accordionExample"
      >
        <div class="accordion-body">
           <p class="mt-2 pb-3 border-bottom">${item.answer[0]}</p>
          <p class="mt-2">${item.answer[1]}</p>
        </div>
      </div>
    `;

    // הוספת האלמנט לאקורדיון
    accordion.appendChild(accordionItem);
  });
});
