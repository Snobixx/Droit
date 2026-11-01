/* =========================================================
   JurisSTMG — Application JavaScript
   Interactive engine for 1ère STMG Droit
   ========================================================= */

// --- DONNÉES DU COURS ---

// 1. Les Flashcards
const FLASHCARDS_DATA = [
    {
        id: 1,
        chapter: "chap1",
        tag: "Chapitre 1 • Fonctions",
        front: "Quelles sont les deux grandes fonctions du droit ?",
        back: "1. <strong>Organiser la société</strong> (fixer les règles de vie, garantir l'ordre public).<br><br>2. <strong>Pacifier la société</strong> (régler les conflits sans violence, sanctionner les violations)."
    },
    {
        id: 2,
        chapter: "chap1",
        tag: "Chapitre 1 • Définition",
        front: "Qu'est-ce que l'Ordre Public ?",
        back: "C'est la situation nécessaire au bon fonctionnement de la société et au maintien de la <strong>sécurité</strong>, de la <strong>tranquillité</strong> et de la <strong>salubrité publiques</strong>."
    },
    {
        id: 3,
        chapter: "chap1",
        tag: "Chapitre 1 • Valeurs",
        front: "Quelles sont les 4 valeurs fondamentales de la République française ?",
        back: "• <strong>Liberté :</strong> faire ce qui ne nuit pas à autrui.<br>• <strong>Égalité :</strong> mêmes droits et devoirs.<br>• <strong>Solidarité :</strong> entraide sociale (RSA, Sécu).<br>• <strong>Laïcité :</strong> neutralité religieuse de l'État et liberté de conscience."
    },
    {
        id: 4,
        chapter: "chap1",
        tag: "Chapitre 1 • Caractéristiques",
        front: "Quelles sont les 3 caractéristiques indispensables de la règle de droit ?",
        back: "1. <strong>Légitime :</strong> émane d'une autorité habilitée.<br>2. <strong>Obligatoire :</strong> sanctionnée par l'autorité publique.<br>3. <strong>Générale :</strong> s'applique à tous dans une même situation juridique."
    },
    {
        id: 5,
        chapter: "chap1",
        tag: "Chapitre 1 • Distinction",
        front: "Quelle est la différence fondamentale entre Droit et Morale ?",
        back: "Le <strong>Droit</strong> est imposé par l'autorité publique et sa violation entraîne une <em>sanction juridique</em>.<br><br>La <strong>Morale</strong> relève de la conscience personnelle et sa violation entraîne une <em>sanction personnelle (remords)</em>."
    },
    {
        id: 6,
        chapter: "chap2",
        tag: "Chapitre 2 • Définition",
        front: "Que désigne l'expression « Sources du droit » ?",
        back: "Ce sont les <strong>origines des règles de droit</strong>, c’est-à-dire l'ensemble des <em>textes</em> et des <em>autorités</em> qui ont le pouvoir de créer des règles juridiques."
    },
    {
        id: 7,
        chapter: "chap2",
        tag: "Chapitre 2 • International",
        front: "Que prévoit l'article 55 de la Constitution française ?",
        back: "Il prévoit que les <strong>traités internationaux</strong> régulièrement ratifiés ou approuvés et publiés ont une <strong>autorité supérieure à celle des lois</strong> (sous réserve de réciprocité)."
    },
    {
        id: 8,
        chapter: "chap2",
        tag: "Chapitre 2 • Droit Européen",
        front: "Quelle est la différence entre un Règlement européen et une Directive ?",
        back: "• <strong>Règlement :</strong> obligatoire et <em>directement applicable</em> dans tous les pays membres.<br><br>• <strong>Directive :</strong> fixe des <em>objectifs à atteindre</em> que l'État doit transposer dans sa loi nationale."
    },
    {
        id: 9,
        chapter: "chap2",
        tag: "Chapitre 2 • Droit National",
        front: "Quel est le rôle de la Constitution et du Conseil constitutionnel ?",
        back: "La <strong>Constitution</strong> est le texte fondamental qui organise les pouvoirs publics et garantit les libertés.<br><br>Le <strong>Conseil constitutionnel</strong> vérifie que les lois votées respectent la Constitution."
    },
    {
        id: 10,
        chapter: "chap2",
        tag: "Chapitre 2 • Élaboration de la loi",
        front: "Quelle est la différence entre un Projet de loi et une Proposition de loi ?",
        back: "• <strong>Projet de loi :</strong> texte rédigé à l'initiative du <em>Gouvernement</em> (Premier ministre).<br><br>• <strong>Proposition de loi :</strong> texte rédigé à l'initiative d'un ou plusieurs <em>parlementaires</em> (députés/sénateurs)."
    },
    {
        id: 11,
        chapter: "chap2",
        tag: "Chapitre 2 • Procédure",
        front: "Qu'est-ce que la « navette parlementaire » ?",
        back: "C'est la <strong>circulation d'un texte de loi entre l'Assemblée nationale et le Sénat</strong> afin qu'ils s'accordent sur un texte voté en termes identiques."
    },
    {
        id: 12,
        chapter: "chap2",
        tag: "Chapitre 2 • Règlements",
        front: "Qui prend les Décrets et qui prend les Arrêtés ?",
        back: "• <strong>Décrets :</strong> pris par le <em>Président de la République</em> ou le <em>Premier ministre</em>.<br><br>• <strong>Arrêtés :</strong> pris par des <em>autorités administratives</em> (ministre, préfet ou maire)."
    },
    {
        id: 13,
        chapter: "chap2",
        tag: "Chapitre 2 • Justice",
        front: "Qu'est-ce que la Jurisprudence et quels sont ses rôles ?",
        back: "C'est l’<strong>ensemble des décisions rendues par les tribunaux</strong>.<br><br>Rôles : interpréter les règles de droit, préciser leur application aux cas concrets et les adapter à l’évolution de la société."
    },
    {
        id: 14,
        chapter: "chap2",
        tag: "Chapitre 2 • Droit Négocié",
        front: "Qu'est-ce qu'une Convention Collective ?",
        back: "Un accord négocié entre les <strong>représentants des employeurs</strong> et ceux des <strong>salariés</strong> qui précise et améliore les conditions de travail et droits des salariés par branche ou entreprise."
    },
    {
        id: 15,
        chapter: "chap2",
        tag: "Chapitre 2 • Institutions",
        front: "Quels sont les 3 pouvoirs de l'État et leur mission ?",
        back: "1. <strong>Législatif (Parlement) :</strong> vote les lois.<br>2. <strong>Exécutif (Président & Gouv) :</strong> met en œuvre les lois.<br>3. <strong>Judiciaire (Tribunaux) :</strong> rend la justice et tranche les litiges."
    }
];

// 2. Les Questions du QCM
const QUIZ_QUESTIONS = [
    {
        id: 1,
        cat: "Chapitre 1 : Fonctions du droit",
        q: "Quelle est l'une des deux missions fondamentales du droit ?",
        options: [
            "Assurer la suprématie de la morale religieuse",
            "Pacifier la société en réglant les conflits sans violence",
            "Éliminer totalement les désaccords entre individus",
            "Permettre à chaque citoyen de se faire justice lui-même"
        ],
        answer: 1,
        expl: "Le droit a pour rôle d'organiser la vie en société et de la pacifier en fournissant un cadre pour trancher les litiges sans recourir à la violence."
    },
    {
        id: 2,
        cat: "Chapitre 1 : Caractéristiques de la règle de droit",
        q: "Pourquoi dit-on que la règle de droit est « générale » ?",
        options: [
            "Parce qu'elle est toujours votée par un général de l'armée",
            "Parce qu'elle s'applique à toutes les personnes placées dans la même situation juridique",
            "Parce qu'elle ne prévoit aucune exception ni aucune nuance",
            "Parce qu'elle est valable dans le monde entier"
        ],
        answer: 1,
        expl: "La règle de droit est générale car elle s'applique de manière abstraite et impersonnelle à tous les individus placés dans une même situation juridique, sans viser nommément quelqu'un."
    },
    {
        id: 3,
        cat: "Chapitre 1 : Droit vs Morale",
        q: "Quelle sanction caractérise la violation d'une règle morale ?",
        options: [
            "Une amende forfaitaire de 135 euros",
            "Une peine d'emprisonnement avec sursis",
            "Une sanction personnelle telle que le remords ou la réprobation sociale",
            "La confiscation de ses biens par les huissiers de justice"
        ],
        answer: 2,
        expl: "La morale relève de la conscience personnelle : sa violation n'entraîne pas de sanction juridique officielle émise par la force publique, mais des remords ou une réprobation sociale."
    },
    {
        id: 4,
        cat: "Chapitre 1 : Valeurs républicaines",
        q: "Que garantit le principe de laïcité en France ?",
        options: [
            "L'interdiction pure et simple de toute pratique religieuse",
            "La supériorité des lois religieuses sur les lois votées",
            "La neutralité de l'État et la liberté de conscience de chaque citoyen",
            "L'obligation d'adhérer à une religion reconnue par l'État"
        ],
        answer: 2,
        expl: "La laïcité impose à l'État d'être neutre à l'égard des religions, tout en garantissant la liberté de croire ou de ne pas croire et l'égalité de tous les citoyens."
    },
    {
        id: 5,
        cat: "Chapitre 2 : Traités internationaux",
        q: "Selon l'article 55 de la Constitution, quelle est la place d'un traité international ratifié ?",
        options: [
            "Il est inférieur aux décrets du Premier ministre",
            "Il a une autorité supérieure à celle des lois nationales",
            "Il a exactement la même valeur qu'un arrêté municipal",
            "Il doit obligatoirement être réécrit chaque année"
        ],
        answer: 1,
        expl: "L'article 55 de la Constitution dispose que les traités internationaux régulièrement ratifiés et publiés prévalent sur les lois votées par le Parlement français."
    },
    {
        id: 6,
        cat: "Chapitre 2 : Droit de l'Union européenne",
        q: "Quelle est la particularité d'un « règlement européen » ?",
        options: [
            "Il est directement applicable et obligatoire dans tous les États membres",
            "Il nécessite obligatoirement d'être transformé en décret pour exister",
            "Il ne concerne que les entreprises de plus de 500 salariés",
            "Il ne s'applique que sous la forme d'un simple conseil facultatif"
        ],
        answer: 0,
        expl: "Le règlement européen a une portée générale et est directement applicable dans chaque État membre sans transposition nationale (contrairement à la directive)."
    },
    {
        id: 7,
        cat: "Chapitre 2 : Élaboration de la loi",
        q: "Comment appelle-t-on un texte de loi proposé par le Gouvernement ?",
        options: [
            "Une proposition de loi",
            "Un projet de loi",
            "Une ordonnance judiciaire",
            "Un arrêté ministériel"
        ],
        answer: 1,
        expl: "Un PROJET de loi provient du Gouvernement (Premier ministre / ministres), tandis qu'une PROPOSITION de loi émane des parlementaires (députés ou sénateurs)."
    },
    {
        id: 8,
        cat: "Chapitre 2 : Procédure législative",
        q: "Qu'est-ce que la « promulgation » d'une loi ?",
        options: [
            "L'écriture du premier brouillon par les députés",
            "Le rejet définitif du texte par le Sénat",
            "L'acte par lequel le Président atteste son existence et ordonne son exécution",
            "La publication de commentaires sur les réseaux sociaux officiels"
        ],
        answer: 2,
        expl: "La promulgation est la signature du texte par le Président de la République qui rend la loi exécutoire, avant sa publication au Journal officiel."
    },
    {
        id: 9,
        cat: "Chapitre 2 : Pouvoir réglementaire",
        q: "Quelle autorité peut prendre un « arrêté » ?",
        options: [
            "Uniquement le Conseil constitutionnel",
            "Un ministre, un préfet ou un maire",
            "Uniquement le Parlement réuni en congrès",
            "Un employeur lors d'un entretien d'embauche"
        ],
        answer: 1,
        expl: "Les arrêtés sont des actes administratifs pris par un ministre (arrêté ministériel), un préfet (arrêté préfectoral) ou un maire (arrêté municipal)."
    },
    {
        id: 10,
        cat: "Chapitre 2 : Jurisprudence",
        q: "La jurisprudence correspond à :",
        options: [
            "L'ensemble des articles du Code pénal",
            "L'ensemble des décisions rendues par les juridictions (tribunaux et cours)",
            "L'accord signé entre deux syndicats de salariés",
            "Le registre des lois votées par l'Assemblée nationale"
        ],
        answer: 1,
        expl: "La jurisprudence regroupe l'ensemble des jugements et arrêts rendus par les cours et tribunaux, permettant d'interpréter le droit et d'adapter les textes à la réalité."
    },
    {
        id: 11,
        cat: "Chapitre 2 : Droit négocié",
        q: "Qui négocie une convention collective ?",
        options: [
            "Le Président de la République et les sénateurs",
            "Les juges de la Cour de cassation et les policiers",
            "Les représentants des employeurs et les représentants des salariés",
            "Le Parlement européen et la Commission européenne"
        ],
        answer: 2,
        expl: "Les conventions collectives sont le résultat de la négociation entre représentants des employeurs (patronat) et représentants des salariés (syndicats)."
    },
    {
        id: 12,
        cat: "Chapitre 2 : Séparation des pouvoirs",
        q: "Quel organe détient le pouvoir judiciaire en France ?",
        options: [
            "Le Parlement (Assemblée nationale et Sénat)",
            "Le Président de la République et son gouvernement",
            "Les juridictions (cours et tribunaux indépendants)",
            "Les préfectures de région"
        ],
        answer: 2,
        expl: "Le pouvoir judiciaire est confié aux juges et magistrats au sein des cours et tribunaux indépendants pour juger et trancher les litiges."
    }
];

// 3. Les Définitions du Glossaire
const GLOSSARY_DATA = [
    {
        term: "Droit",
        chap: "Chapitre 1",
        def: "Ensemble des règles qui organisent la vie en société et dont le respect est assuré et sanctionné par l’autorité publique."
    },
    {
        term: "Ordre Public",
        chap: "Chapitre 1",
        def: "Situation nécessaire au bon fonctionnement de la société et au maintien indispensable de la sécurité, de la tranquillité et de la salubrité publiques."
    },
    {
        term: "Sanction Juridique",
        chap: "Chapitre 1",
        def: "Conséquence prévue et appliquée par le droit en cas de violation d'une règle (peine d'emprisonnement, amende, dommages et intérêts, nullité)."
    },
    {
        term: "Règle Morale",
        chap: "Chapitre 1",
        def: "Règle de conduite dictée par la conscience individuelle distinguant le bien du mal, dont la violation n'entraîne qu'un remords personnel."
    },
    {
        term: "Laïcité",
        chap: "Chapitre 1",
        def: "Principe républicain imposant la neutralité stricte de l’État envers les religions et garantissant la liberté de conscience et l'égalité des citoyens."
    },
    {
        term: "Constitution",
        chap: "Chapitre 2",
        def: "Texte suprême et fondamental de la Ve République (1958) qui organise les pouvoirs publics et garantit les droits et libertés fondamentaux."
    },
    {
        term: "Traité International",
        chap: "Chapitre 2",
        def: "Accord formel conclu entre plusieurs États ou organisations internationales. En France, l'art. 55 lui confère une autorité supérieure aux lois."
    },
    {
        term: "Règlement Européen",
        chap: "Chapitre 2",
        def: "Acte juridique de l'Union européenne obligatoire dans tous ses éléments et directement applicable dans l'ensemble des pays membres sans transposition."
    },
    {
        term: "Directive Européenne",
        chap: "Chapitre 2",
        def: "Acte de l'UE qui lie les États membres quant au résultat à atteindre, tout en leur laissant la liberté de la forme et des moyens de transposition."
    },
    {
        term: "Loi",
        chap: "Chapitre 2",
        def: "Règle de droit écrite, générale et obligatoire, votée par le Parlement (Assemblée nationale et Sénat) selon la procédure législative."
    },
    {
        term: "Navette Parlementaire",
        chap: "Chapitre 2",
        def: "Mouvement de va-et-vient d'une proposition ou d'un projet de loi entre l'Assemblée nationale et le Sénat en vue d'une adoption en termes identiques."
    },
    {
        term: "Promulgation",
        chap: "Chapitre 2",
        def: "Acte officiel par lequel le Président de la République atteste solennellement qu'une loi a été votée et ordonne son application dans le pays."
    },
    {
        term: "Journal Officiel (JO)",
        chap: "Chapitre 2",
        def: "Publication officielle de l'État français qui porte les lois, décrets et arrêtés à la connaissance de tous pour les rendre opposables."
    },
    {
        term: "Décret",
        chap: "Chapitre 2",
        def: "Acte réglementaire pris au niveau national par le Président de la République ou le Premier ministre."
    },
    {
        term: "Arrêté",
        chap: "Chapitre 2",
        def: "Décision administrative émanant d'une autorité exécutive subordonnée (ministre, préfet de département ou maire d'une commune)."
    },
    {
        term: "Jurisprudence",
        chap: "Chapitre 2",
        def: "Ensemble des arrêts et jugements rendus par les cours et tribunaux, permettant d'interpréter, d'adapter et d'appliquer le droit."
    },
    {
        term: "Convention Collective",
        chap: "Chapitre 2",
        def: "Accord conclu entre organisations d'employeurs et syndicats de salariés fixant des conditions de travail et des garanties sociales adaptées."
    },
    {
        term: "Séparation des Pouvoirs",
        chap: "Chapitre 2",
        def: "Principe démocratique séparant les fonctions législative (Parlement), exécutive (Président/Gouv) et judiciaire (tribunaux) pour éviter la tyrannie."
    }
];

// 4. Détails des Niveaux de la Pyramide de Kelsen
const PYRAMID_DETAILS = {
    1: {
        badge: "NIVEAU 1 • SUPRÊME",
        title: "1. Le Bloc de Constitutionnalité",
        html: `
            <p><strong>C'est le sommet absolu de la hiérarchie des normes en droit français.</strong></p>
            <p>Il regroupe le texte de la Constitution du 4 octobre 1958, son préambule, la Déclaration des Droits de l'Homme et du Citoyen de 1789 et la Charte de l'environnement de 2004.</p>
            <div class="detail-rule">
                <strong>Principe fondamental :</strong> Aucune loi ni aucun règlement français ne peut être contraire à la Constitution. Le <em>Conseil constitutionnel</em> en est le gardien vigilant.
            </div>
        `
    },
    2: {
        badge: "NIVEAU 2 • INTERNATIONAL",
        title: "2. Le Bloc de Conventionnalité",
        html: `
            <p><strong>Comprend les traités internationaux et le droit de l'Union européenne.</strong></p>
            <p>Conformément à l'<strong>article 55 de la Constitution</strong>, les traités ratifiés et appliqués ont une autorité supérieure aux lois françaises.</p>
            <p>Dans l'Union européenne, on y trouve les traités fondateurs, les règlements (d'application directe immédiate) et les directives (qui imposent des objectifs obligatoires).</p>
            <div class="detail-rule">
                <strong>En cas de conflit :</strong> Un juge français écartera une loi française si celle-ci contredit un traité international ou un texte européen en vigueur.
            </div>
        `
    },
    3: {
        badge: "NIVEAU 3 • LÉGISLATIF",
        title: "3. Le Bloc de Légalité (La Loi)",
        html: `
            <p><strong>Comprend l'ensemble des lois votées par le Parlement français (Assemblée nationale et Sénat).</strong></p>
            <p>La loi détermine les principes fondamentaux du droit pénal, de la nationalité, des droits civils, des impôts et du droit du travail.</p>
            <div class="detail-rule">
                <strong>Procédure clé :</strong> Elle naît d'un projet (Gouvernement) ou d'une proposition (Parlementaires), traverse la navette parlementaire, puis est promulguée par le Président de la République.
            </div>
        `
    },
    4: {
        badge: "NIVEAU 4 • EXÉCUTIF & ADMINISTRATIF",
        title: "4. Le Bloc Réglementaire",
        html: `
            <p><strong>Les actes pris par le pouvoir exécutif et l'administration pour préciser l'application de la loi :</strong></p>
            <p>• <strong>Décrets :</strong> signés par le Président ou le Premier ministre (ex: modalités d'une réforme).<br>
            • <strong>Arrêtés :</strong> pris par un ministre, un préfet (département) ou un maire (commune).</p>
            <div class="detail-rule">
                <strong>Règle de hiérarchie :</strong> Un arrêté municipal ne peut pas contredire un arrêté préfectoral, qui ne peut pas contredire un décret, qui lui-même doit respecter la loi !
            </div>
        `
    },
    5: {
        badge: "NIVEAU 5 • DROIT NÉGOCIÉ",
        title: "5. Droit Négocié & Conventions Collectives",
        html: `
            <p><strong>Comprend les conventions et accords collectifs ainsi que les contrats individuels.</strong></p>
            <p>Négociés entre partenaires sociaux (patronat et syndicats de salariés) dans une branche d'activité (métallurgie, hôtellerie, commerce) ou une entreprise précise.</p>
            <div class="detail-rule">
                <strong>Principe de faveur :</strong> En droit du travail, une convention collective peut accorder des droits plus avantageux aux salariés que la loi (ex: plus de congés, salaire minimum plus élevé).
            </div>
        `
    }
};

// --- GESTION DE L'ÉTAT LOCAL (LocalStorage) ---
const STATE = {
    theme: localStorage.getItem('juris_theme') || 'light',
    masteredCards: JSON.parse(localStorage.getItem('juris_mastered_cards') || '[]'),
    reviewCards: JSON.parse(localStorage.getItem('juris_review_cards') || '[]'),
    bestScore: localStorage.getItem('juris_best_score') || null,
    currentFcIndex: 0,
    currentFilter: 'all',
    quizIndex: 0,
    quizScore: 0,
    filteredCards: []
};

// --- INITIALISATION AU CHARGEMENT DU DOM ---
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initTabs();
    initChapterFilters();
    initFlashcards();
    initQuiz();
    initGlossary();
    initSearch();
    updateGlobalProgress();
});

// --- THÈME SOMBRE / CLAIR ---
function initTheme() {
    if (STATE.theme === 'dark') {
        document.body.classList.replace('light-theme', 'dark-theme');
        document.getElementById('theme-icon').textContent = '☀️';
    } else {
        document.body.classList.replace('dark-theme', 'light-theme');
        document.getElementById('theme-icon').textContent = '🌙';
    }

    document.getElementById('theme-toggle').addEventListener('click', () => {
        if (document.body.classList.contains('light-theme')) {
            document.body.classList.replace('light-theme', 'dark-theme');
            document.getElementById('theme-icon').textContent = '☀️';
            STATE.theme = 'dark';
        } else {
            document.body.classList.replace('dark-theme', 'light-theme');
            document.getElementById('theme-icon').textContent = '🌙';
            STATE.theme = 'light';
        }
        localStorage.setItem('juris_theme', STATE.theme);
    });

    document.getElementById('print-btn').addEventListener('click', () => {
        switchTab('memo');
        setTimeout(() => window.print(), 200);
    });
}

// --- GESTION DES ONGLETS (desktop + burger mobile) ---
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            switchTab(tabId);
        });
    });

    // --- Burger menu ---
    const burgerBtn  = document.getElementById('burger-btn');
    const tabsMenu   = document.getElementById('tabs-menu');
    const overlay    = document.getElementById('burger-overlay');

    if (burgerBtn) {
        burgerBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = tabsMenu.classList.toggle('is-open');
            burgerBtn.classList.toggle('is-open', isOpen);
            overlay.classList.toggle('is-open', isOpen);
            burgerBtn.setAttribute('aria-expanded', isOpen);
        });

        // Fermer en cliquant sur l'overlay
        overlay.addEventListener('click', closeBurger);

        // Fermer sur Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeBurger();
        });
    }
}

function closeBurger() {
    const burgerBtn = document.getElementById('burger-btn');
    const tabsMenu  = document.getElementById('tabs-menu');
    const overlay   = document.getElementById('burger-overlay');
    if (!burgerBtn) return;
    tabsMenu.classList.remove('is-open');
    burgerBtn.classList.remove('is-open');
    overlay.classList.remove('is-open');
    burgerBtn.setAttribute('aria-expanded', 'false');
}

function switchTab(tabId) {
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(b => {
        b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
    });

    document.querySelectorAll('.tab-content').forEach(c => {
        c.classList.remove('active');
    });

    const activeContent = document.getElementById(`tab-${tabId}`);
    if (activeContent) {
        activeContent.classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Met à jour le label du burger avec le nom de l'onglet actif
    const activeBtn = document.querySelector(`.tab-btn[data-tab="${tabId}"]`);
    const labelEl = document.getElementById('burger-current-label');
    if (activeBtn && labelEl) {
        labelEl.textContent = activeBtn.textContent.trim();
    }

    // Ferme le menu burger après sélection
    closeBurger();
}

// --- FILTRE DES CHAPITRES DANS L'ONGLET COURS ---
function initChapterFilters() {
    const chips = document.querySelectorAll('.chip');
    chips.forEach(chip => {
        chip.addEventListener('click', () => {
            chips.forEach(c => c.classList.remove('active'));
            chip.classList.add('active');

            const filter = chip.getAttribute('data-filter-chap');
            const sec1 = document.getElementById('section-chap1');
            const sec2 = document.getElementById('section-chap2');

            if (filter === 'all') {
                sec1.style.display = 'block';
                sec2.style.display = 'block';
            } else if (filter === 'chap1') {
                sec1.style.display = 'block';
                sec2.style.display = 'none';
            } else if (filter === 'chap2') {
                sec1.style.display = 'none';
                sec2.style.display = 'block';
            }
        });
    });
}

// --- PYRAMIDE DE KELSEN INTERACTIVE ---
function showLevelDetail(level) {
    const data = PYRAMID_DETAILS[level];
    if (!data) return;

    document.querySelectorAll('.pyramid-level').forEach((el, idx) => {
        el.classList.toggle('active-lvl', (idx + 1) === level);
    });

    const badge = document.getElementById('detail-badge');
    const title = document.getElementById('detail-title');
    const content = document.getElementById('detail-content');

    badge.textContent = data.badge;
    title.textContent = data.title;
    content.innerHTML = data.html;
}

// --- FLASHCARDS SYSTEM ---
function initFlashcards() {
    updateFilteredCards();
    renderCurrentFlashcard();

    const card = document.getElementById('current-flashcard');
    card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
    });

    // Raccourci barre d'espace
    window.addEventListener('keydown', (e) => {
        const isFlashcardTabActive = document.getElementById('tab-flashcards').classList.contains('active');
        if (isFlashcardTabActive && e.code === 'Space' && e.target.tagName !== 'INPUT') {
            e.preventDefault();
            card.classList.toggle('is-flipped');
        }
    });

    document.getElementById('btn-fc-prev').addEventListener('click', () => {
        if (STATE.currentFcIndex > 0) {
            STATE.currentFcIndex--;
            renderCurrentFlashcard();
        }
    });

    document.getElementById('btn-fc-next').addEventListener('click', () => {
        if (STATE.currentFcIndex < STATE.filteredCards.length - 1) {
            STATE.currentFcIndex++;
            renderCurrentFlashcard();
        }
    });

    document.getElementById('btn-mark-master').addEventListener('click', () => {
        const curr = STATE.filteredCards[STATE.currentFcIndex];
        if (!curr) return;
        if (!STATE.masteredCards.includes(curr.id)) {
            STATE.masteredCards.push(curr.id);
            localStorage.setItem('juris_mastered_cards', JSON.stringify(STATE.masteredCards));
        }
        // Retirer de la liste à revoir s'il y était
        STATE.reviewCards = STATE.reviewCards.filter(id => id !== curr.id);
        localStorage.setItem('juris_review_cards', JSON.stringify(STATE.reviewCards));

        updateGlobalProgress();
        triggerNextCard();
    });

    document.getElementById('btn-mark-review').addEventListener('click', () => {
        const curr = STATE.filteredCards[STATE.currentFcIndex];
        if (!curr) return;
        if (!STATE.reviewCards.includes(curr.id)) {
            STATE.reviewCards.push(curr.id);
            localStorage.setItem('juris_review_cards', JSON.stringify(STATE.reviewCards));
        }
        // Retirer des acquis
        STATE.masteredCards = STATE.masteredCards.filter(id => id !== curr.id);
        localStorage.setItem('juris_mastered_cards', JSON.stringify(STATE.masteredCards));

        updateGlobalProgress();
        triggerNextCard();
    });

    // Filtres des cartes
    document.querySelectorAll('.fc-filter').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.fc-filter').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            STATE.currentFilter = btn.getAttribute('data-fc-filter');
            STATE.currentFcIndex = 0;
            updateFilteredCards();
            renderCurrentFlashcard();
        });
    });
}

function updateFilteredCards() {
    if (STATE.currentFilter === 'all') {
        STATE.filteredCards = [...FLASHCARDS_DATA];
    } else if (STATE.currentFilter === 'chap1') {
        STATE.filteredCards = FLASHCARDS_DATA.filter(c => c.chapter === 'chap1');
    } else if (STATE.currentFilter === 'chap2') {
        STATE.filteredCards = FLASHCARDS_DATA.filter(c => c.chapter === 'chap2');
    } else if (STATE.currentFilter === 'review') {
        STATE.filteredCards = FLASHCARDS_DATA.filter(c => STATE.reviewCards.includes(c.id));
    }

    document.getElementById('count-to-review').textContent = STATE.reviewCards.length;
}

function renderCurrentFlashcard() {
    const cardEl = document.getElementById('current-flashcard');
    cardEl.classList.remove('is-flipped');

    const total = STATE.filteredCards.length;
    document.getElementById('fc-total-idx').textContent = total;

    if (total === 0) {
        document.getElementById('fc-current-idx').textContent = "0";
        document.getElementById('fc-tag').textContent = "Aucune carte";
        document.getElementById('fc-front-text').textContent = "Bravo ! Aucune carte dans cette catégorie pour le moment.";
        document.getElementById('fc-back-text').textContent = "Changez de filtre ou ajoutez des cartes en cliquant sur « À revoir » !";
        return;
    }

    if (STATE.currentFcIndex >= total) {
        STATE.currentFcIndex = 0;
    }

    const item = STATE.filteredCards[STATE.currentFcIndex];
    document.getElementById('fc-current-idx').textContent = STATE.currentFcIndex + 1;
    document.getElementById('fc-tag').textContent = item.tag;
    document.getElementById('fc-front-text').textContent = item.front;
    document.getElementById('fc-back-text').innerHTML = item.back;
}

function triggerNextCard() {
    if (STATE.currentFcIndex < STATE.filteredCards.length - 1) {
        STATE.currentFcIndex++;
        renderCurrentFlashcard();
    } else {
        renderCurrentFlashcard();
    }
}

// --- QUIZ & QCM DU BAC ---
function initQuiz() {
    STATE.quizIndex = 0;
    STATE.quizScore = 0;
    renderQuizQuestion();

    document.getElementById('btn-next-question').addEventListener('click', () => {
        STATE.quizIndex++;
        if (STATE.quizIndex < QUIZ_QUESTIONS.length) {
            renderQuizQuestion();
        } else {
            showQuizResults();
        }
    });
}

function renderQuizQuestion() {
    const qData = QUIZ_QUESTIONS[STATE.quizIndex];
    const totalQ = QUIZ_QUESTIONS.length;

    document.getElementById('quiz-q-num').textContent = STATE.quizIndex + 1;
    document.getElementById('quiz-score-val').textContent = `${STATE.quizScore}/${STATE.quizIndex}`;
    document.getElementById('quiz-cat').textContent = qData.cat;
    document.getElementById('quiz-question-text').textContent = qData.q;

    const optList = document.getElementById('quiz-options-list');
    optList.innerHTML = '';

    const letters = ['A', 'B', 'C', 'D'];
    qData.options.forEach((opt, idx) => {
        const btn = document.createElement('button');
        btn.className = 'quiz-opt-btn';
        btn.innerHTML = `<span class="opt-letter">${letters[idx]}</span><span>${opt}</span>`;
        btn.addEventListener('click', () => handleQuizAnswer(idx, qData.answer, qData.expl));
        optList.appendChild(btn);
    });

    document.getElementById('quiz-explanation').classList.add('hidden');
    document.getElementById('quiz-card-box').classList.remove('hidden');
    document.getElementById('quiz-results-box').classList.add('hidden');
}

function handleQuizAnswer(selectedIdx, correctIdx, explanation) {
    const allBtns = document.querySelectorAll('.quiz-opt-btn');
    allBtns.forEach(b => b.disabled = true);

    const isCorrect = (selectedIdx === correctIdx);
    if (isCorrect) {
        allBtns[selectedIdx].classList.add('correct');
        STATE.quizScore++;
        document.getElementById('expl-title').textContent = "✅ Excellente réponse !";
        document.getElementById('expl-title').style.color = "var(--success)";
    } else {
        allBtns[selectedIdx].classList.add('wrong');
        allBtns[correctIdx].classList.add('correct');
        document.getElementById('expl-title').textContent = "❌ Mauvaise réponse !";
        document.getElementById('expl-title').style.color = "var(--danger)";
    }

    document.getElementById('expl-text').textContent = explanation;
    document.getElementById('quiz-explanation').classList.remove('hidden');
    document.getElementById('quiz-score-val').textContent = `${STATE.quizScore}/${STATE.quizIndex + 1}`;
}

function showQuizResults() {
    document.getElementById('quiz-card-box').classList.add('hidden');
    const resultsBox = document.getElementById('quiz-results-box');
    resultsBox.classList.remove('hidden');

    const total = QUIZ_QUESTIONS.length;
    const score = STATE.quizScore;
    document.getElementById('final-score-display').textContent = score;

    const emojiEl = document.getElementById('result-emoji');
    const titleEl = document.getElementById('result-title');
    const adviceEl = document.getElementById('result-advice');

    if (score >= 11) {
        emojiEl.textContent = '🏆';
        titleEl.textContent = 'Félicitations ! Mention Très Bien !';
        adviceEl.textContent = 'Votre maîtrise des deux chapitres est parfaite. Vous êtes fin prêt(e) pour un 20/20 au devoir !';
        launchConfetti();
    } else if (score >= 8) {
        emojiEl.textContent = '🎯';
        titleEl.textContent = 'Bien joué ! Niveau validé.';
        adviceEl.textContent = 'Vous avez une bonne compréhension des notions fondamentales. Relisez rapidement les flashcards pour corriger les quelques hésitations.';
    } else {
        emojiEl.textContent = '💡';
        titleEl.textContent = 'Encore un petit effort de révision !';
        adviceEl.textContent = 'Prenez 10 minutes pour relire la fiche express et vous entraîner avec les cartes mémo. Vous progresserez très vite !';
    }

    // Sauvegarde meilleur score
    if (!STATE.bestScore || score > parseInt(STATE.bestScore)) {
        STATE.bestScore = score;
        localStorage.setItem('juris_best_score', score);
    }
    updateGlobalProgress();
}

function restartQuiz() {
    STATE.quizIndex = 0;
    STATE.quizScore = 0;
    renderQuizQuestion();
}

// --- CAS PRATIQUES : RÉVÉLER LA SOLUTION ---
function toggleSolution(solId, btn) {
    const sol = document.getElementById(solId);
    if (sol.classList.contains('hidden')) {
        sol.classList.remove('hidden');
        btn.textContent = '🙈 Masquer la correction';
    } else {
        sol.classList.add('hidden');
        btn.textContent = '👁️ Afficher la correction rédigée';
    }
}

// --- GLOSSAIRE AUTOMATIQUE & RECHERCHE ---
function initGlossary() {
    const container = document.getElementById('glossary-container');
    container.innerHTML = '';

    GLOSSARY_DATA.forEach(item => {
        const card = document.createElement('div');
        card.className = 'glossary-card';
        card.innerHTML = `
            <span class="glossary-chap-badge">${item.chap}</span>
            <h4>${item.term}</h4>
            <p>${item.def}</p>
        `;
        container.appendChild(card);
    });

    const filterInput = document.getElementById('lexique-filter-input');
    filterInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        document.querySelectorAll('.glossary-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(query) ? 'block' : 'none';
        });
    });
}

// --- RECHERCHE RAPIDE GLOBALE DANS LE HEADER ---
function initSearch() {
    const searchInput = document.getElementById('quick-search');
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
            const query = searchInput.value.toLowerCase().trim();
            if (!query) return;

            // Aller sur l'onglet Lexique et filtrer
            switchTab('lexique');
            const lexInput = document.getElementById('lexique-filter-input');
            lexInput.value = query;
            lexInput.dispatchEvent(new Event('input'));
            lexInput.focus();
        }
    });
}

// --- SYNTHÈSE VOCALE (Web Speech API) ---
let currentUtterance = null;

function speakSection(sectionId) {
    if (!('speechSynthesis' in window)) {
        alert("La synthèse vocale n'est pas prise en charge par votre navigateur.");
        return;
    }

    window.speechSynthesis.cancel();

    const sec = document.getElementById(sectionId);
    if (!sec) return;

    // Récupérer le texte sans les boutons
    const clone = sec.cloneNode(true);
    clone.querySelectorAll('button, .audio-player-box').forEach(el => el.remove());
    const rawText = clone.innerText;

    // Nettoyage pour une lecture fluide
    const cleanText = rawText.replace(/[\n\r]+/g, '. ').slice(0, 1500); // lit les 1500 premiers caractères du résumé

    currentUtterance = new SpeechSynthesisUtterance(cleanText);
    currentUtterance.lang = 'fr-FR';
    currentUtterance.rate = 1.0;

    window.speechSynthesis.speak(currentUtterance);
}

function stopSpeech() {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
    }
}

// --- PROGRESSION GLOBALE ET STATS ---
function updateGlobalProgress() {
    const totalCards = FLASHCARDS_DATA.length;
    const mastered = STATE.masteredCards.length;

    document.getElementById('mastered-cards-count').textContent = mastered;

    if (STATE.bestScore !== null) {
        document.getElementById('best-quiz-score').textContent = `${STATE.bestScore}/12`;
    }

    // Calcul du % : 60% cartes maîtrisées + 40% quiz passé
    const cardPct = (mastered / totalCards) * 60;
    const quizPct = STATE.bestScore !== null ? (parseInt(STATE.bestScore) / 12) * 40 : 10;
    const totalPct = Math.min(100, Math.round(cardPct + quizPct));

    document.getElementById('global-progress-fill').style.width = `${totalPct}%`;
    document.getElementById('global-progress-percent').textContent = `${totalPct}%`;
}

// --- EFFET CONFETTI CANVAS ---
function launchConfetti() {
    const canvas = document.getElementById('confetti-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#2563eb', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6'];

    for (let i = 0; i < 90; i++) {
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            r: Math.random() * 6 + 3,
            color: colors[Math.floor(Math.random() * colors.length)],
            vx: (Math.random() - 0.5) * 14,
            vy: (Math.random() - 0.7) * 16,
            gravity: 0.25,
            opacity: 1
        });
    }

    let frame = 0;
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        let alive = false;

        particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;
            p.vy += p.gravity;
            p.opacity -= 0.012;

            if (p.opacity > 0) {
                alive = true;
                ctx.fillStyle = p.color;
                ctx.globalAlpha = p.opacity;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
                ctx.fill();
            }
        });

        frame++;
        if (alive && frame < 120) {
            requestAnimationFrame(animate);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
    }

    animate();
}

