let v=["abide", "abler", "abode", "abort", "about", "above", "abuzz", "abyss", "acerb", "ached", "aches", "acorn", "acres", "acute", "adage", "added", "adder", "adept", "adieu", "adman", "admen", "adopt", "adore", "adorn", "adult", "adzes", "aegis", "affix", "afire", "afoot", "afoul", "after", "again", "agape", "agate", "agent", "agile", "aging", "aglow", "agony", "agree", "ahead", "aided", "aider", "aides", "aimed", "airer", "aisle", "aitch", "alack", "alarm", "album", "aleph", "alert", "alias", "alibi", "alien", "align", "alike", "alive", "alkie", "alley", "allot", "allow", "alloy", "aloft", "aloha", "alone", "along", "aloud", "alpha", "altar", "alter", "amass", "amaze", "amber", "ambit", "amble", "amend", "amide", "amino", "amiss", "ample", "amply", "amuck", "amuse", "angel", "anger", "angle", "angry", "angst", "anile", "anima", "anise", "ankle", "annoy", "annul", "anode", "antic", "antsy", "anvil", "aorta", "apart", "aping", "apple", "apply", "apron", "aptly", "arbor", "arcus", "arena", "argon", "argue", "arise", "armed", "armor", "aroma", "arose", "array", "arrow", "arson", "arsis", "artsy", "ashen", "aside", "asked", "asker", "aspen", "asset", "aster", "astir", "aught", "auger", "aught", "aunts", "aurae", "auric", "auris", "autos", "auxin", "avast", "avers", "avoid", "avows", "await", "awake", "award", "aware", "awful", "awoke", "axing", "axiom", "azure", "babas", "babel", "babes", "babka", "baboo", "babul", "backs", "bacon", "baddy", "badge", "badly", "bagel", "baggy", "bahai", "bahia", "bails", "baize", "baker", "baler", "bales", "balky", "bally", "balsa", "banal", "bands", "bandy", "banes", "bangs", "banjo", "banks", "banns", "barbs", "bardy", "barer", "bares", "barfs", "baric", "barks", "barmy", "barns", "baron", "baser", "basic", "basil", "basin", "basis", "basks", "baste", "batch", "bated", "bates", "bathe", "baths", "baton", "batty", "bauds", "bawds", "bawdy", "bawls", "bayou", "beach", "beads", "beady", "beaks", "beams", "beans", "beany", "beard", "bears", "beast", "beats", "bebop", "becks", "bedew", "bedim", "beech", "beefs", "beefy", "beeps", "beers", "beets", "befog", "beget", "begin", "begot", "begum", "begun", "beigy", "beige", "being", "belay", "belch", "belie", "belle", "bells", "belly", "below", "belts", "bench", "bends", "bened", "benin", "bents", "beret", "bergs", "berry", "berth", "beset", "besom", "besot", "bests", "betas", "beths", "betro", "bevel", "bezel", "bhang", "bhoot", "bhuts", "bible", "biddy", "bided", "bides", 'lemon', 'grape', 'melon', 'peach', 'chive', 'onion','thyme', 'celer', 'carob', 'dates', 'figgy', 'papaw','plums', 'prune', 'funky', 'smile', 'heart', 'happy','dream', 'magic', 'tiger', 'fairy', 'wings', 'stars','light', 'water', 'ocean', 'waves', 'sandy', 'coast','grain', 'wheat', 'bread', 'toast', 'pasta', 'risus','laugh', 'jolly', 'funny', 'giddy', 'fizzy', 'bubly','spark', 'flame', 'blaze', 'glare', 'flash', 'scent','smell', 'spice', 'sugar', 'honey', 'merry', 'sunny','hazel', 'grace', 'faith', 'peace', 'loves', 'shave', 'daisy', 'tulip','lilac', 'roses', 'frees', 'petal', 'bloom', 'lilly']

let solution = v[Math.floor(Math.random()*343)]
console.log(solution)
let char=solution.split('')

let a=["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]

function onchange2(id, val){
    
        let c=id.split("-")
        let d=parseInt(c[2])
            if(val.toLowerCase().length==1){
                document.querySelector('#box-'+(parseInt(c[1])+1)+'-'+(parseInt(c[2])+1)).removeAttribute('disabled');
                document.querySelector('#box-'+(parseInt(c[1])+1)+'-'+(parseInt(c[2])+1)).focus();
                
            }
            if(val.toLowerCase()==char[parseInt(c[1])]){
                a[d]="green"
            }
            if(val.toLowerCase()!=char[parseInt(c[1])] && solution.includes(val.toLowerCase())){
                a[d]="yellow"
            }   
            if(val.toLowerCase()!=char[parseInt(c[1])] && !(solution.includes(val.toLowerCase()))){
                a[d]="red"
            }
            
}
let z=1
function onchange1(id, val){
    let c=id.split("-")
        let d=parseInt(c[2])
    
        if(val.toLowerCase()==char[parseInt(c[1])]){
            a[d]="green"
        }
        if(val.toLowerCase()!=char[parseInt(c[1])] && solution.includes(val.toLowerCase())){
            a[d]="yellow"
        }   
        if(val.toLowerCase()!=char[parseInt(c[1])] && !(solution.includes(val.toLowerCase()))){
            a[d]="red"
        }
    
    let i=0
    let ini=0
        for(let j=0;j<30;j++){
            
        if(document.querySelector('#box-'+i+'-'+j)!==null){
            document.querySelector('#box-'+i+'-'+j).style.backgroundColor=a[j];

            if((i+1)%5==0){
                if(document.querySelector('#box-'+i+'-'+j).style.backgroundColor==document.querySelector('#box-'+(i-1)+'-'+(j-1)).style.backgroundColor &&
                document.querySelector('#box-'+(i-1)+'-'+(j-1)).style.backgroundColor==document.querySelector('#box-'+(i-2)+'-'+(j-2)).style.backgroundColor &&
                document.querySelector('#box-'+(i-2)+'-'+(j-2)).style.backgroundColor==document.querySelector('#box-'+(i-3)+'-'+(j-3)).style.backgroundColor &&
                document.querySelector('#box-'+(i-3)+'-'+(j-3)).style.backgroundColor==document.querySelector('#box-'+(i-4)+'-'+(j-4)).style.backgroundColor && document.querySelector('#box-'+i+'-'+j).style.backgroundColor=='green')
                {
                    document.querySelector(".winningPop").style.display='inline';
                    console.log("you won");
                    ini=1
                
                }
                
    
            }
            if(i+1==5){i=0}
            else{i++}
            
    };  
        }
        if(ini!=1){document.querySelector('.row-div'+z).classList.add('shake')
        setInterval(()=>{document.querySelector('.row-div'+z).classList.remove('shake')},10)
        
        document.querySelector('#box-'+(0)+'-'+(d+1)).removeAttribute('disabled')
        setTimeout(document.querySelector('#box-'+(0)+'-'+(d+1)).focus(),1000)}
        if(z+1==7){z=1}
        z++
        if(ini!=1 && i==4 && z==6){console.log("You lost loser")}
        
    
    
}
function  restart(){
    window.location.reload()
}

//document.querySelector("restart-btn").addEventListener('keyup',()=>{
 //   window.location.reload()
//})

