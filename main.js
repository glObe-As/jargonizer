function submit(direction) {
    var input = document.getElementById('input').value ;
    document.getElementById("status").innerHTML = "getting rules"
    rules = get_formatting_rules(direction)
    document.getElementById("status").innerHTML = "Starting applying rules"
    for (i = 0; i< rules.length; i++) {
        document.getElementById("status").innerHTML = (i+1)*100/rules.length + "% done"
        input = input.replace(rules[i][0], rules[i][1]);
    }

    document.getElementById('output_area').innerHTML = input
}
function to_submit() {
    submit("to")
}
function back_submit(){
    submit("back")
}

function get_formatting_rules(direction) {
    if (direction == "to") {
    return [
        [/\babundance\b/gi, "enough"],
        [/\babundance\b/gi, "plenty"],
        [/\baccede\b/gi, "allow"],
        [/\baccede to\b/gi, "agree to"],
        [/\baccelerate\b/gi, "speed up"],
        [/\baccentuate\b/gi, "stress"],
        [/\baccommodation\b/gi, "room"],
        [/\baccompany\b/gi, "go with"],
        [/\baccomplish\b/gi, "do"],
        [/\baccorded\b/gi, "given"],
        [/\baccordingly\b/gi, "thus"],
        [/\baccordingly\b/gi, "so"],
        [/\baccrue\b/gi, "add"],
        [/\baccure\b/gi, "gain"],
        [/\baccurate\b/gi, "right"],
        [/\bacquiesce\b/gi, "agree"],
        [/\bacquire\b/gi, "get"],
        [/\badditional\b/gi, "extra"],
        [/\baddress\b/gi, "discuss"],
        [/\baddressees\b/gi, "you"],
        [/\badjacent to \b/gi, "Next to"],
        [/\badjustment\b/gi, "change"],
        [/\badjustment\b/gi, "alteration"],
        [/\badmissible\b/gi, "allowed"],
        [/\badmissible\b/gi, "accepted"],
        [/\badvantageous\b/gi, "helpful"],
        [/\badversely impact on\b/gi, "hurt"],
        [/\badversely impact on\b/gi, "set back"],
        [/\badvise\b/gi, "tell"],
        [/\baggregate\b/gi, "total"],
        [/\baircraft\b/gi, "airplane"],
        [/\baircraft\b/gi, "aeroplane"],
        [/\balleviate\b/gi, "ease"],
        [/\balleviate\b/gi, "reduce"],
        [/\ballocate\b/gi, "divide"],
        [/\balong the lines of\b/gi, "like"],
        [/\balong the lines of\b/gi, "as in"],
        [/\balternatively\b/gi, "or"],
        [/\bameliorate\b/gi, "improve"],
        [/\bameliorate\b/gi, "help"],
        [/\band particularly\b/gi, "particularly"],
        [/\banticipate\b/gi, "expect"],
        [/\ba number of\b/gi, "some"],
        [/\bapplicant\b/gi, "you"],
        [/\bapplication\b/gi, "use"],
        [/\bapparent\b/gi, "clear"],
        [/\bapparent\b/gi, "plain"],
        [/\bapprehend\b/gi, "arrest"],
        [/\bappreciable\b/gi, "many"],
        [/\bappropriate\b/gi, "proper"],
        [/\bappropriate\b/gi, "right"],
        [/\bapproximate\b/gi, "about"],
        [/\barrive onboard \b/gi, "arrive"],
        [/\bas a means of \b/gi, "to"],
        [/\bascertain\b/gi, "find out"],
        [/\bascertain\b/gi, "learn"],
        [/\bas of yet\b/gi, "yet"],
        [/\battempt\b/gi, "try"],
        [/\bat this point in time\b/gi, "now"],
        [/\battributable to \b/gi, "because"],
        [/\bat your earliest convenience \b/gi, "as soon as you can"],
        [/\bauthorize\b/gi, "allow"],
        [/\bbeg\b/gi, "ask"],
        [/\bbelated\b/gi, "late"],
        [/\bbeneficial\b/gi, "helpful"],
        [/\bbeneficial\b/gi, "useful"],
        [/\bbestow\b/gi, "give"],
        [/\bbestow\b/gi, "award"],
        [/\bbeverage\b/gi, "drink"],
        [/\bcapability\b/gi, "ability"],
        [/\bcaveat\b/gi, "warning"],
        [/\bcease\b/gi, "stop"],
        [/\bchauffeur\b/gi, "driver"],
        [/\bclose proximity \b/gi, "near"],
        [/\bcombat environment \b/gi, "combat"],
        [/\bcombined\b/gi, "joint"],
        [/\bcommence\b/gi, "begin"],
        [/\bcommence\b/gi, "start"],
        [/\bcompletely revoke \b/gi, "revoke"],
        [/\bcomply with\b/gi, "follow"],
        [/\bcomplete\b/gi, "fill in"],
        [/\bcomponen\b/gi, "part"],
        [/\bcomprise\b/gi, "form"],
        [/\bconceal\b/gi, "hide"],
        [/\bgeneral consensus\b/gi, "consensus"],
        [/\bconsequently\b/gi, "so"],
        [/\bconsolidate\b/gi, "join"],
        [/\bconsolidate\b/gi, "merge"],
        [/\bcontains\b/gi, "has"],
        [/\bconvene\b/gi, "meet"],
        [/\bcorridor\b/gi, "hall"],
        [/\bdeem\b/gi, "believe"],
        [/\bdeem\b/gi, "think"],
        [/\bdemonstrate\b/gi, "prove"],
        [/\bdemonstarte\b/gi, "show"],
        [/\bdesignate\b/gi, "choose"],
        [/\bdesire\b/gi, "want"],
        [/\bdesire\b/gi, "wish"],
        [/\bdespite the fact that \b/gi, "although"],
        [/\bdetermine\b/gi, "decide"],
        [/\bdisclose\b/gi, "show"],
        [/\bdisseminate\b/gi, "pass"],
        [/\bdoes not have \b/gi, "lacks"],
        [/\bdue to the fact that \b/gi, "since"],
        [/\bduring the time that \b/gi, "while"],
        [/\bearly beginnings\b/gi, "beginnings"],
        [/\bearly beginnings\b/gi, "early days"],
        [/\beconomical\b/gi, "cheap"],
        [/\beffect modifications \b/gi, "make changes"],
        [/\belucidate\b/gi, "explain"],
        [/\bemphasize\b/gi, "stress"],
        [/\bemploy\b/gi, "use"],
        [/\benclosed please find \b/gi, "I have enclosed"],
        [/\benclosed\b/gi, "attached"],
        [/\bencounter\b/gi, "meet"],
        [/\bendeavor\b/gi, "try"],
        [/\benquiry\b/gi, "question"],
        [/\bensure\b/gi, "make sure"],
        [/\bentitlement\b/gi, "right"],
        [/\benumerate\b/gi, "count"],
        [/\bequally as \b/gi, "equally"],
        [/\bequipments\b/gi, "equipment"],
        [/\bequitable\b/gi, "fair"],
        [/\bequivalent\b/gi, "equal"],
        [/\bestablish\b/gi, "set up"],
        [/\bevidenced\b/gi, "showed"],
        [/\bevince\b/gi, "show"],
        [/\bexcluding\b/gi, "except"],
        [/\bexclusively\b/gi, "only"],
        [/\bexhibit\b/gi, "show"],
        [/\bexpedite\b/gi, "hurry"],
        [/\bexpeditious\b/gi, "fast"],
        [/\bexpeditious\b/gi, "quick"],
        [/\bexpend\b/gi, "spend"],
        [/\bexpertise\b/gi, "ability"],
        [/\bexpiration\b/gi, "end"],
        [/\bfacilitate\b/gi, "ease"],
        [/\bfacilitate\b/gi, "help"],
        [/\bfauna\b/gi, "animals"],
        [/\bfeasible\b/gi, "workable"],
        [/\bfemales\b/gi, "women"],
        [/\bfinalize\b/gi, "complete"],
        [/\bfirst(ly),\b/gi, "first,"],
        [/\bsecond(ly),\b/gi, "second,"],
        [/\bthird(ly)\b/gi, "third,"],
        [/\bfirst and foremost \b/gi, "first"],
        [/\bflora\b/gi, "plants"],
        [/\bfollowing\b/gi, "after"],
        [/\bfor a period of\b/gi, "for"],
        [/\bforfeit\b/gi, "lose"],
        [/\bforfeit\b/gi, "give up"],
        [/\bformulate\b/gi, "plan"],
        [/\bforward\b/gi, "send"],
        [/\bfrequently\b/gi, "often"],
        [/\bfunction\b/gi, "work"],
        [/\bfurnish\b/gi, "give send"],
        [/\bhas a duty to \b/gi, "must"],
        [/\bhas a requirement for \b/gi, "needs"],
        [/\bhonest truth \b/gi, "truth"],
        [/\bhowever\b/gi, "but"],
        [/\bhowever\b/gi, "yet"],
        [/\bidentical\b/gi, "same"],
        [/\bidentify\b/gi, "find"],
        [/\bidentify with\b/gi, "agree"],
        [/\bidentify with\b/gi, "understand"],
        [/\bif and when\b/gi, "if"],
        [/\bimmediately\b/gi, "at once"],
        [/\bimpacted\b/gi, "affected"],
        [/\bimpacted\b/gi, "changed"],
        [/\bimplement\b/gi, "carry out"],
        [/\bin addition \b/gi, "also"],
        [/\bin all likelihood\b/gi, "probably"],
        [/\bin an effort to\b/gi, "to"],
        [/\binasmuch\b/gi, "since"],
        [/\bin a timely manner\b/gi, "on time"],
        [/\bin a timely manner\b/gi, "promptly"],
        [/\bin between \b/gi, "between"],
        [/\binception\b/gi, "start"],
        [/\bincumbent upon \b/gi, "must"],
        [/\bindication\b/gi, "sign"],
        [/\bindividual\b/gi, "person"],
        [/\bin excess of\b/gi, "more than"],
        [/\bin favor of\b/gi, "for"],
        [/\binitial\b/gi, "first"],
        [/\binitiate\b/gi, "start"],
        [/\bin lieu of\b/gi, "instead of"],
        [/\bin light of the fact that\b/gi, "because"],
        [/\bin many cases\b/gi, "often"],
        [/\bin order to \b/gi, "to"],
        [/\binquire\b/gi, "ask"],
        [/\bin regard(s) to \b/gi, "concerning"],
        [/\bin some instances\b/gi, "sometimes"],
        [/\binside of \b/gi, "inside"],
        [/\binstitute legal proceedings against\b/gi, "sue"],
        [/\bbring action against \b/gi, "sue"],
        [/\binterpose no objection \b/gi, "don't object"],
        [/\bin the amount of\b/gi, "for"],
        [/\bin the case of\b/gi, "when"],
        [/\bin the event of\b/gi, "if"],
        [/\bin the majority of instances\b/gi, "usually"],
        [/\bin the nature of\b/gi, "like"],
        [/\bin the near future\b/gi, "shortly"],
        [/\bin view of\b/gi, "since"],
        [/\bin view of the above\b/gi, "so"],
        [/\birregardless\b/gi, "regardless"],
        [/\bis applicable to\b/gi, "applies to"],
        [/\bis authorized to\b/gi, "may"],
        [/\bis in consonance with\b/gi, "agrees with"],
        [/\bit appears\b/gi, "seems"],
        [/\bit is essential\b/gi, "must"],
        [/\bit is essential\b/gi, "need to"],
        [/\bit is requested\b/gi, "please"],
        [/\bit is requested\b/gi, "we request"],
        [/\bit is requested\b/gi, "I request"],
        [/\bliaison\b/gi, "discussion"],
        [/\blast will and testament\b/gi, "will"],
        [/\bmagnitude\b/gi, "size"],
        [/\bmaintain\b/gi, "keep"],
        [/\bmajority\b/gi, "most"],
        [/\bmake an attempt\b/gi, "try"],
        [/\bmake reference to\b/gi, "refer"],
        [/\bmaximum\b/gi, "greatest"],
        [/\bmaximum\b/gi, "largest"],
        [/\bmaximum\b/gi, "most"],
        [/\bmental attitude\b/gi, "attitude"],
        [/\bmerge\b/gi, "combine"],
        [/\bmethodology\b/gi, "method"],
        [/\bminimize\b/gi, "decrease"],
        [/\bminimum\b/gi, "least"],
        [/\bminimum\b/gi, "smallest"],
        [/\bmodify\b/gi, "change"],
        [/\bmonitor\b/gi, "check"],
        [/\bmontior\b/gi, "watch"],
        [/\bmoreover\b/gi, "what's more"],
        [/\bmultiple\b/gi, "many"],
        [/\bnecessitate\b/gi, "cause"],
        [/\bnevertheless\b/gi, "still"],
        [/\bnevertheless\b/gi, "besides"],
        [/\bnevertheless\b/gi, "even so"],
        [/\bnotify\b/gi, "let know"],
        [/\bnotify\b/gi, "tell"],
        [/\bnot able \b/gi, "unable"],
        [/\bnot accept \b/gi, "reject"],
        [/\bnot certain \b/gi, "uncertain"],
        [/\bnot unlike \b/gi, "similar"],
        [/\bnot unlike\b/gi, "alike"],
        [/\bnot many \b/gi, "few"],
        [/\bnot often \b/gi, "seldom"],
        [/\bnot often\b/gi, "rarely"],
        [/\bnot the same\b/gi, "different"],
        [/\bnotwithstanding\b/gi, "in spite of"],
        [/\bnull and void \b/gi, "null"],
        [/\bvoid\b/gi, "void"],
        [/\bnumerous\b/gi, "many"],
        [/\bobjective\b/gi, "goal"],
        [/\bobtain\b/gi, "get"],
        [/\boff of \b/gi, "off"],
        [/\bon request \b/gi, "if you ask"],
        [/\bon a daily basis \b/gi, "daily"],
        [/\bon a weekly basis \b/gi, "weekly"],
        [/\bon a monthly basis\b/gi, "monthly"],
        [/\bon the part of \b/gi, "by"],
        [/\boperate\b/gi, "run"],
        [/\boperate\b/gi, "use"],
        [/\boperate\b/gi, "work"],
        [/\boptimum\b/gi, "best"],
        [/\boption\b/gi, "choice"],
        [/\borientate\b/gi, "orient"],
        [/\boutside of \b/gi, "outside"],
        [/\boversight \b/gi, "oversee"],
        [/\bowing to the fact that \b/gi, " since"],
        [/\bparticipate\b/gi, "take part"],
        [/\bparticulars\b/gi, "details"],
        [/\bpass away\b/gi, "die"],
        [/\bper annum\b/gi, "a year"],
        [/\bperchance\b/gi, "perhaps"],
        [/\bperform\b/gi, "do"],
        [/\bpermit\b/gi, "let"],
        [/\bperspire\b/gi, "sweat"],
        [/\bperuse\b/gi, "read"],
        [/\bPIN number\b/gi, "PIN"],
        [/\bplace\b/gi, "put"],
        [/\bportion\b/gi, "part"],
        [/\bpossess\b/gi, "have"],
        [/\bpossess\b/gi, "own"],
        [/\bparticular point in time\b/gi, "moment"],
        [/\bpotentiality\b/gi, "potential"],
        [/\bpracticable\b/gi, "practical"],
        [/\bpreclude\b/gi, "prevent"],
        [/\bpreowned \b/gi, "used"],
        [/\bpreviously \b/gi, "before"],
        [/\bpreparatory to\b/gi, "to prepare for"],
        [/\bprior to\b/gi, "before"],
        [/\bprioritize\b/gi, "rank"],
        [/\bproceed\b/gi, "go ahead"],
        [/\bproficiency\b/gi, "skill"],
        [/\bpromulgate\b/gi, "issue"],
        [/\bpromulgate\b/gi, "issue"],
        [/\bprovided that\b/gi, "if"],
        [/\bprovide guidance for\b/gi, "guide"],
        [/\bpurchase\b/gi, "buy"],
        [/\bquite puzzling \b/gi, "baffling"],
        [/\brefer back \b/gi, "refer"],
        [/\bregard as being \b/gi, "regard as"],
        [/\brelocate\b/gi, "move"],
        [/\bremain\b/gi, "stay"],
        [/\bremainder\b/gi, "	rest"],
        [/\bremuneration\b/gi, "pay"],
        [/\bremuneration\b/gi, " payment"],
        [/\brepresents\b/gi, "is"],
        [/\brequest\b/gi, "ask"],
        [/\brequirement\b/gi, "need"],
        [/\breside\b/gi, "live"],
        [/\bresidence\b/gi, "house"],
        [/\bretain\b/gi, "keep"],
        [/\bretire\b/gi, "go to bed"],
        [/\bselection\b/gi, "choice"],
        [/\bset forth in \b/gi, "in"],
        [/\bshall\b/gi, "must"],
        [/\bshould you wish\b/gi, "if you want"],
        [/\bsimilar to\b/gi, "like"],
        [/\bsolicit\b/gi, "ask for"],
        [/\bstate-of-the-art\b/gi, "latest"],
        [/\bstrategize\b/gi, "plan"],
        [/\bsubstantial\b/gi, "large, much"],
        [/\bsuccessfully complete \b/gi, "complete, pass"],
        [/\bsufficient\b/gi, "enough"],
        [/\bterminate\b/gi, "end, stop"],
        [/\bthan was formerly the case  \b/gi, "now"],
        [/\btherefore\b/gi, "thus, so"],
        [/\btherein\b/gi, "there"],
        [/\bthe undersigned \b/gi, "I"],
        [/\btimely\b/gi, "prompt"],
        [/\btime period \b/gi, "	(either one)"],
        [/\bto be violative of \b/gi, "violate"],
        [/\btook advantage of \b/gi, "preyed"],
        [/\btranspire\b/gi, "happen"],
        [/\btransmit\b/gi, "send"],
        [/\bunder the provisions of \b/gi, "under"],
        [/\buntil such time as \b/gi, "until"],
        [/\bvalidate\b/gi, "confirm"],
        [/\bvariation \b/gi, "change"],
        [/\bvarious different \b/gi, "various"],
        [/\bvarious different\b/gi, "different"],
        [/\bviable\b/gi, "practical"],
        [/\bviable\b/gi, "workable"],
        [/\bwarrant\b/gi, "call for"],
        [/\bwe are in receipt of \b/gi, "we've received"],
        [/\bwhether or not \b/gi, "whether"],
        [/\bwhosoever\b/gi, "whoever"],
        [/\bwhomsover\b/gi, "whomever"],
        [/\bwith the exception of \b/gi, "except for"],
        [/\bwith the minimum of delay\b/gi, "quickly"],
        [/\bwitnessed\b/gi, "saw"],
        [/\byou are requested \b/gi, "please"],
        [/\byour attention is drawn\b/gi, "please see"],
        [/\byour attentio is drawn\b/gi, "please note"],
        [/\byour office \b/gi, "you"],
        ]
    } else {
        return [
            [/\benough\b/gi, "abundance"],
            [/\bplenty\b/gi, "abundance"],
            [/\ballow\b/gi, "accede"],
            [/\bagree to\b/gi, "accede to"],
            [/\bspeed up\b/gi, "accelerate"],
            [/\bstress\b/gi, "accentuate"],
            [/\broom\b/gi, "accommodation"],
            [/\bgo with\b/gi, "accompany"],
            [/\bdo\b/gi, "accomplish"],
            [/\bgiven\b/gi, "accorded"],
            [/\bthus\b/gi, "accordingly"],
            [/\bso\b/gi, "accordingly"],
            [/\badd\b/gi, "accrue"],
            [/\bgain\b/gi, "accure"],
            [/\bright\b/gi, "accurate"],
            [/\bagree\b/gi, "acquiesce"],
            [/\bget\b/gi, "acquire"],
            [/\bextra\b/gi, "additional"],
            [/\bdiscuss\b/gi, "address"],
            [/\byou\b/gi, "addressees"],
            [/\bNext to\b/gi, "adjacent to "],
            [/\bchange\b/gi, "adjustment"],
            [/\balteration\b/gi, "adjustment"],
            [/\ballowed\b/gi, "admissible"],
            [/\baccepted\b/gi, "admissible"],
            [/\bhelpful\b/gi, "advantageous"],
            [/\bhurt\b/gi, "adversely impact on"],
            [/\bset back\b/gi, "adversely impact on"],
            [/\btell\b/gi, "advise"],
            [/\btotal\b/gi, "aggregate"],
            [/\bairplane\b/gi, "aircraft"],
            [/\baeroplane\b/gi, "aircraft"],
            [/\bease\b/gi, "alleviate"],
            [/\breduce\b/gi, "alleviate"],
            [/\bdivide\b/gi, "allocate"],
            [/\blike\b/gi, "along the lines of"],
            [/\bas in\b/gi, "along the lines of"],
            [/\bor\b/gi, "alternatively"],
            [/\bimprove\b/gi, "ameliorate"],
            [/\bhelp\b/gi, "ameliorate"],
            [/\bparticularly\b/gi, "and particularly"],
            [/\bexpect\b/gi, "anticipate"],
            [/\bsome\b/gi, "a number of"],
            [/\byou\b/gi, "applicant"],
            [/\buse\b/gi, "application"],
            [/\bclear\b/gi, "apparent"],
            [/\bplain\b/gi, "apparent"],
            [/\barrest\b/gi, "apprehend"],
            [/\bmany\b/gi, "appreciable"],
            [/\bproper\b/gi, "appropriate"],
            [/\bright\b/gi, "appropriate"],
            [/\babout\b/gi, "approximate"],
            [/\barrive\b/gi, "arrive onboard "],
            [/\bto\b/gi, "as a means of "],
            [/\bfind out\b/gi, "ascertain"],
            [/\blearn\b/gi, "ascertain"],
            [/\byet\b/gi, "as of yet"],
            [/\btry\b/gi, "attempt"],
            [/\bnow\b/gi, "at this point in time"],
            [/\bbecause\b/gi, "attributable to "],
            [/\bas soon as you can\b/gi, "at your earliest convenience "],
            [/\ballow\b/gi, "authorize"],
            [/\bask\b/gi, "beg"],
            [/\blate\b/gi, "belated"],
            [/\bhelpful\b/gi, "beneficial"],
            [/\buseful\b/gi, "beneficial"],
            [/\bgive\b/gi, "bestow"],
            [/\baward\b/gi, "bestow"],
            [/\bdrink\b/gi, "beverage"],
            [/\bability\b/gi, "capability"],
            [/\bwarning\b/gi, "caveat"],
            [/\bstop\b/gi, "cease"],
            [/\bdriver\b/gi, "chauffeur"],
            [/\bnear\b/gi, "close proximity "],
            [/\bcombat\b/gi, "combat environment "],
            [/\bjoint\b/gi, "combined"],
            [/\bbegin\b/gi, "commence"],
            [/\bstart\b/gi, "commence"],
            [/\brevoke\b/gi, "completely revoke "],
            [/\bfollow\b/gi, "comply with"],
            [/\bfill in\b/gi, "complete"],
            [/\bpart\b/gi, "componen"],
            [/\bform\b/gi, "comprise"],
            [/\bhide\b/gi, "conceal"],
            [/\bconsensus\b/gi, "general consensus"],
            [/\bso\b/gi, "consequently"],
            [/\bjoin\b/gi, "consolidate"],
            [/\bmerge\b/gi, "consolidate"],
            [/\bhas\b/gi, "contains"],
            [/\bmeet\b/gi, "convene"],
            [/\bhall\b/gi, "corridor"],
            [/\bbelieve\b/gi, "deem"],
            [/\bthink\b/gi, "deem"],
            [/\bprove\b/gi, "demonstrate"],
            [/\bshow\b/gi, "demonstarte"],
            [/\bchoose\b/gi, "designate"],
            [/\bwant\b/gi, "desire"],
            [/\bwish\b/gi, "desire"],
            [/\balthough\b/gi, "despite the fact that "],
            [/\bdecide\b/gi, "determine"],
            [/\bshow\b/gi, "disclose"],
            [/\bpass\b/gi, "disseminate"],
            [/\blacks\b/gi, "does not have "],
            [/\bsince\b/gi, "due to the fact that "],
            [/\bwhile\b/gi, "during the time that "],
            [/\bbeginnings\b/gi, "early beginnings"],
            [/\bearly days\b/gi, "early beginnings"],
            [/\bcheap\b/gi, "economical"],
            [/\bmake changes\b/gi, "effect modifications "],
            [/\bexplain\b/gi, "elucidate"],
            [/\bstress\b/gi, "emphasize"],
            [/\buse\b/gi, "employ"],
            [/\bI have enclosed\b/gi, "enclosed please find "],
            [/\battached\b/gi, "enclosed"],
            [/\bmeet\b/gi, "encounter"],
            [/\btry\b/gi, "endeavor"],
            [/\bquestion\b/gi, "enquiry"],
            [/\bmake sure\b/gi, "ensure"],
            [/\bright\b/gi, "entitlement"],
            [/\bcount\b/gi, "enumerate"],
            [/\bequally\b/gi, "equally as "],
            [/\bequipment\b/gi, "equipments"],
            [/\bfair\b/gi, "equitable"],
            [/\bequal\b/gi, "equivalent"],
            [/\bset up\b/gi, "establish"],
            [/\bshowed\b/gi, "evidenced"],
            [/\bshow\b/gi, "evince"],
            [/\bexcept\b/gi, "excluding"],
            [/\bonly\b/gi, "exclusively"],
            [/\bshow\b/gi, "exhibit"],
            [/\bhurry\b/gi, "expedite"],
            [/\bfast\b/gi, "expeditious"],
            [/\bquick\b/gi, "expeditious"],
            [/\bspend\b/gi, "expend"],
            [/\bability\b/gi, "expertise"],
            [/\bend\b/gi, "expiration"],
            [/\bease\b/gi, "facilitate"],
            [/\bhelp\b/gi, "facilitate"],
            [/\banimals\b/gi, "fauna"],
            [/\bworkable\b/gi, "feasible"],
            [/\bwomen\b/gi, "females"],
            [/\bcomplete\b/gi, "finalize"],
            [/\bfirst,\b/gi, "first(ly),"],
            [/\bsecond,\b/gi, "second(ly),"],
            [/\bthird,\b/gi, "third(ly)"],
            [/\bfirst\b/gi, "first and foremost "],
            [/\bplants\b/gi, "flora"],
            [/\bafter\b/gi, "following"],
            [/\bfor\b/gi, "for a period of"],
            [/\blose\b/gi, "forfeit"],
            [/\bgive up\b/gi, "forfeit"],
            [/\bplan\b/gi, "formulate"],
            [/\bsend\b/gi, "forward"],
            [/\boften\b/gi, "frequently"],
            [/\bwork\b/gi, "function"],
            [/\bgive send\b/gi, "furnish"],
            [/\bmust\b/gi, "has a duty to "],
            [/\bneeds\b/gi, "has a requirement for "],
            [/\btruth\b/gi, "honest truth "],
            [/\bbut\b/gi, "however"],
            [/\byet\b/gi, "however"],
            [/\bsame\b/gi, "identical"],
            [/\bfind\b/gi, "identify"],
            [/\bagree\b/gi, "identify with"],
            [/\bunderstand\b/gi, "identify with"],
            [/\bif\b/gi, "if and when"],
            [/\bat once\b/gi, "immediately"],
            [/\baffected\b/gi, "impacted"],
            [/\bchanged\b/gi, "impacted"],
            [/\bcarry out\b/gi, "implement"],
            [/\balso\b/gi, "in addition "],
            [/\bprobably\b/gi, "in all likelihood"],
            [/\bto\b/gi, "in an effort to"],
            [/\bsince\b/gi, "inasmuch"],
            [/\bon time\b/gi, "in a timely manner"],
            [/\bpromptly\b/gi, "in a timely manner"],
            [/\bbetween\b/gi, "in between "],
            [/\bstart\b/gi, "inception"],
            [/\bmust\b/gi, "incumbent upon "],
            [/\bsign\b/gi, "indication"],
            [/\bperson\b/gi, "individual"],
            [/\bmore than\b/gi, "in excess of"],
            [/\bfor\b/gi, "in favor of"],
            [/\bfirst\b/gi, "initial"],
            [/\bstart\b/gi, "initiate"],
            [/\binstead of\b/gi, "in lieu of"],
            [/\bbecause\b/gi, "in light of the fact that"],
            [/\boften\b/gi, "in many cases"],
            [/\bto\b/gi, "in order to "],
            [/\bask\b/gi, "inquire"],
            [/\bconcerning\b/gi, "in regard(s) to "],
            [/\bsometimes\b/gi, "in some instances"],
            [/\binside\b/gi, "inside of "],
            [/\bsue\b/gi, "institute legal proceedings against"],
            [/\bsue\b/gi, "bring action against "],
            [/\bdon't object\b/gi, "interpose no objection "],
            [/\bfor\b/gi, "in the amount of"],
            [/\bwhen\b/gi, "in the case of"],
            [/\bif\b/gi, "in the event of"],
            [/\busually\b/gi, "in the majority of instances"],
            [/\blike\b/gi, "in the nature of"],
            [/\bshortly\b/gi, "in the near future"],
            [/\bsince\b/gi, "in view of"],
            [/\bso\b/gi, "in view of the above"],
            [/\bregardless\b/gi, "irregardless"],
            [/\bapplies to\b/gi, "is applicable to"],
            [/\bmay\b/gi, "is authorized to"],
            [/\bagrees with\b/gi, "is in consonance with"],
            [/\bseems\b/gi, "it appears"],
            [/\bmust\b/gi, "it is essential"],
            [/\bneed to\b/gi, "it is essential"],
            [/\bplease\b/gi, "it is requested"],
            [/\bwe request\b/gi, "it is requested"],
            [/\bI request\b/gi, "it is requested"],
            [/\bdiscussion\b/gi, "liaison"],
            [/\bwill\b/gi, "last will and testament"],
            [/\bsize\b/gi, "magnitude"],
            [/\bkeep\b/gi, "maintain"],
            [/\bmost\b/gi, "majority"],
            [/\btry\b/gi, "make an attempt"],
            [/\brefer\b/gi, "make reference to"],
            [/\bgreatest\b/gi, "maximum"],
            [/\blargest\b/gi, "maximum"],
            [/\bmost\b/gi, "maximum"],
            [/\battitude\b/gi, "mental attitude"],
            [/\bcombine\b/gi, "merge"],
            [/\bmethod\b/gi, "methodology"],
            [/\bdecrease\b/gi, "minimize"],
            [/\bleast\b/gi, "minimum"],
            [/\bsmallest\b/gi, "minimum"],
            [/\bchange\b/gi, "modify"],
            [/\bcheck\b/gi, "monitor"],
            [/\bwatch\b/gi, "montior"],
            [/\bwhat's more\b/gi, "moreover"],
            [/\bmany\b/gi, "multiple"],
            [/\bcause\b/gi, "necessitate"],
            [/\bstill\b/gi, "nevertheless"],
            [/\bbesides\b/gi, "nevertheless"],
            [/\beven so\b/gi, "nevertheless"],
            [/\blet know\b/gi, "notify"],
            [/\btell\b/gi, "notify"],
            [/\bunable\b/gi, "not able "],
            [/\breject\b/gi, "not accept "],
            [/\buncertain\b/gi, "not certain "],
            [/\bsimilar\b/gi, "not unlike "],
            [/\balike\b/gi, "not unlike"],
            [/\bfew\b/gi, "not many "],
            [/\bseldom\b/gi, "not often "],
            [/\brarely\b/gi, "not often"],
            [/\bdifferent\b/gi, "not the same"],
            [/\bin spite of\b/gi, "notwithstanding"],
            [/\bnull\b/gi, "null and void "],
            [/\bvoid\b/gi, "void"],
            [/\bmany\b/gi, "numerous"],
            [/\bgoal\b/gi, "objective"],
            [/\bget\b/gi, "obtain"],
            [/\boff\b/gi, "off of "],
            [/\bif you ask\b/gi, "on request "],
            [/\bdaily\b/gi, "on a daily basis "],
            [/\bweekly\b/gi, "on a weekly basis "],
            [/\bmonthly\b/gi, "on a monthly basis"],
            [/\bby\b/gi, "on the part of "],
            [/\brun\b/gi, "operate"],
            [/\buse\b/gi, "operate"],
            [/\bwork\b/gi, "operate"],
            [/\bbest\b/gi, "optimum"],
            [/\bchoice\b/gi, "option"],
            [/\borient\b/gi, "orientate"],
            [/\boutside\b/gi, "outside of "],
            [/\boversee\b/gi, "oversight "],
            [/\b since\b/gi, "owing to the fact that "],
            [/\btake part\b/gi, "participate"],
            [/\bdetails\b/gi, "particulars"],
            [/\bdie\b/gi, "pass away"],
            [/\ba year\b/gi, "per annum"],
            [/\bperhaps\b/gi, "perchance"],
            [/\bdo\b/gi, "perform"],
            [/\blet\b/gi, "permit"],
            [/\bsweat\b/gi, "perspire"],
            [/\bread\b/gi, "peruse"],
            [/\bPIN\b/gi, "PIN number"],
            [/\bput\b/gi, "place"],
            [/\bpart\b/gi, "portion"],
            [/\bhave\b/gi, "possess"],
            [/\bown\b/gi, "possess"],
            [/\bmoment\b/gi, "particular point in time"],
            [/\bpotential\b/gi, "potentiality"],
            [/\bpractical\b/gi, "practicable"],
            [/\bprevent\b/gi, "preclude"],
            [/\bused\b/gi, "preowned "],
            [/\bbefore\b/gi, "previously "],
            [/\bto prepare for\b/gi, "preparatory to"],
            [/\bbefore\b/gi, "prior to"],
            [/\brank\b/gi, "prioritize"],
            [/\bgo ahead\b/gi, "proceed"],
            [/\bskill\b/gi, "proficiency"],
            [/\bissue\b/gi, "promulgate"],
            [/\bissue\b/gi, "promulgate"],
            [/\bif\b/gi, "provided that"],
            [/\bguide\b/gi, "provide guidance for"],
            [/\bbuy\b/gi, "purchase"],
            [/\bbaffling\b/gi, "quite puzzling "],
            [/\brefer\b/gi, "refer back "],
            [/\bregard as\b/gi, "regard as being "],
            [/\bmove\b/gi, "relocate"],
            [/\bstay\b/gi, "remain"],
            [/\b	rest\b/gi, "remainder"],
            [/\bpay\b/gi, "remuneration"],
            [/\b payment\b/gi, "remuneration"],
            [/\bis\b/gi, "represents"],
            [/\bask\b/gi, "request"],
            [/\bneed\b/gi, "requirement"],
            [/\blive\b/gi, "reside"],
            [/\bhouse\b/gi, "residence"],
            [/\bkeep\b/gi, "retain"],
            [/\bgo to bed\b/gi, "retire"],
            [/\bchoice\b/gi, "selection"],
            [/\bin\b/gi, "set forth in "],
            [/\bmust\b/gi, "shall"],
            [/\bif you want\b/gi, "should you wish"],
            [/\blike\b/gi, "similar to"],
            [/\bask for\b/gi, "solicit"],
            [/\blatest\b/gi, "state-of-the-art"],
            [/\bplan\b/gi, "strategize"],
            [/\blarge, much\b/gi, "substantial"],
            [/\bcomplete, pass\b/gi, "successfully complete "],
            [/\benough\b/gi, "sufficient"],
            [/\bend, stop\b/gi, "terminate"],
            [/\bnow\b/gi, "than was formerly the case  "],
            [/\bthus, so\b/gi, "therefore"],
            [/\bthere\b/gi, "therein"],
            [/\bI\b/gi, "the undersigned "],
            [/\bprompt\b/gi, "timely"],
            [/\b	(either one)\b/gi, "time period "],
            [/\bviolate\b/gi, "to be violative of "],
            [/\bpreyed\b/gi, "took advantage of "],
            [/\bhappen\b/gi, "transpire"],
            [/\bsend\b/gi, "transmit"],
            [/\bunder\b/gi, "under the provisions of "],
            [/\buntil\b/gi, "until such time as "],
            [/\bconfirm\b/gi, "validate"],
            [/\bchange\b/gi, "variation "],
            [/\bvarious\b/gi, "various different "],
            [/\bdifferent\b/gi, "various different"],
            [/\bpractical\b/gi, "viable"],
            [/\bworkable\b/gi, "viable"],
            [/\bcall for\b/gi, "warrant"],
            [/\bwe've received\b/gi, "we are in receipt of "],
            [/\bwhether\b/gi, "whether or not "],
            [/\bwhoever\b/gi, "whosoever"],
            [/\bwhomever\b/gi, "whomsover"],
            [/\bexcept for\b/gi, "with the exception of "],
            [/\bquickly\b/gi, "with the minimum of delay"],
            [/\bsaw\b/gi, "witnessed"],
            [/\bplease\b/gi, "you are requested "],
            [/\bplease see\b/gi, "your attention is drawn"],
            [/\bplease note\b/gi, "your attentio is drawn"],
            [/\byou\b/gi, "your office "],
            ]

    }
}