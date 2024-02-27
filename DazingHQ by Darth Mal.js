queNumberRectangle = document.querySelector('.queNumberRectangle')

startBtn =  document.querySelector('.startBtn')

smallAnswerBoxes = document.querySelectorAll('.smallAnswerBox')

bigAnswerBox = document.querySelector('.bigAnswerBox')


smallAnswerBoxText = document.querySelectorAll('.smallAnswerBoxText')

questionh3 = document.querySelector('.question') 

nextbtn = document.querySelector('.nextbtn')

shapeBg = document.querySelector('.shapeBg')

shapeBg2 = document.querySelector('.shapeBg2')

purpleCover = document.querySelector('.cover')

reloadBtn = document.querySelector('.reloadBtn')

queNumberRectangle.style.display = 'block'
nextbtn.style.display = 'block'
questionNumber = 1
score = 0
numbersDone = []
nextbtnClicks = 0

resultPage = document.querySelector('.resultPage')
resultPage__circleInner = document.querySelector('.resultPage__circle--inner')
resultPage__circle = document.querySelector('.resultPage__circle')



//SPICES



questions = [
    {
        question: 'A linear pattern of immunoglobulin deposition along the glomerular basement membrane that can be demonstrated by immunofluorescence is typical of...',
        answers: [
            {text: 'Lupus nephritis', correct: 'false' },
            {text: 'Diabetic glomerulopathy', correct: 'false' },
            {text: 'Goodpasture`s syndrome', correct: true },
            {text: 'Goldblatt`s kidney', correct: 'false' },
            {text: 'Renal vein thrombosis', correct: 'false' }
        ]
    },

    {
        question: 'The combination of severe acute flank pain and microscopic hematuria is suggestive of?',
        answers: [
            {text: 'Cholelithiasis', correct: 'false' },
            {text: 'Choledocholithiasis', correct: 'false' },
            {text: 'Kidney tumor', correct: 'false' },
            {text: 'Urinary Bladder Tumour', correct: 'false' },
            {text: 'Urolithiasis', correct: true }
        ]
    },

    {
        question: 'In utero bilateral renal agenesis is most likely to produce',
        answers: [
            {text: 'Anencephaly', correct: 'false' },
            {text: 'Gastroschisis', correct: 'false' },
            {text: 'Oligohydramnios', correct: true },
            {text: 'Polycythemia', correct: 'false' },
            {text: 'Retrolental fibroplasia', correct: 'false' }
        ]
    },

    {
        question: 'An 8-month-old male infant presents with progressive renal and hepatic failure. Despite intensive medical therapy, the infant dies. At the time of autopsy, the external surfaces of his kidneys are found to be smooth, but cut section reveals numerous cysts that are lined up in a row. What is the mode of inheritance of this renal abnormality',
        answers: [
            {text: 'Autosomal dominant', correct: 'false' },
            {text: 'Autosomal recessive', correct: true },
            {text: 'X-linked dominant', correct: 'false' },
            {text: 'X-linked recessive', correct: 'false' },
            {text: 'Mitochondrial', correct: 'false' }
        ]
    },

    {
        question: 'Immune complexes located within the glomerular basement membrane would most likely be found in a patient with',
        answers: [
            {text: 'Acute glomerulonephritis (GN)', correct: 'false' },
            {text: 'Membranous GN', correct: true},
            {text: 'Type I membranoproliferative glomerulonephritis (MPGN)', correct: 'false' },
            {text: 'Type II MPGN', correct: 'false' },
            {text: 'IgA nephropathy', correct: 'false' }
        ]
    },

    {
        question: 'Which of the following is more likely to cause nephrotic syndrome in this patient (a 30 year old man with syphilis, and is on penicillamine medication)?',
        answers: [
            {text: 'Minimal change disease', correct: 'false' },
            {text: 'Membranous Nephropathy', correct: true },
            {text: 'Focal segmental glomerulosclerosis', correct: 'false' },
            {text: 'Diabetes', correct: 'false' },
            {text: 'Amyloidosis', correct: 'false' }
        ]
    },

    {
        question: 'On biopsy, there is normal glomeruli on LM, podocyte effacement on Electron Microscopy.The result is suggest of which dx?',
        answers: [
            {text: 'Minimal change disease', correct: true },
            {text: 'FSGS', correct: 'false' },
            {text: 'Alport syndrome', correct: 'false' },
            {text: 'Acute glomerulonephritis', correct: 'false' },
            {text: 'Membranous nephropathy', correct: 'false' }
        ]
    },

    {
        question: 'Rapidly progressive glomerulonephritis is characterized histologically by',
        answers: [
            {text: 'Crescents in the glomeruli', correct: true },
            {text: 'Fibrinoid necrosis of the afferent arterioles', correct: 'false' },
            {text: 'Fibromuscular hyperplasia of the renal artery', correct: 'false' },
            {text: 'Neutrophils in the interstitium', correct: 'false' },
            {text: 'Splitting of the basement membrane by mesangial cells', correct: 'false' }
        ]
    },

    {
        question: 'A single nucleotide change in a codon on chromosome 11 that causes valine to replace glutamic acid at the sixth position of the β chain of hemoglobin is associated with',
        answers: [
            {text: 'α thalassemia', correct: 'false' },
            {text: 'Glucose-6-phosphate dehydrogenase deficiency', correct: 'false' },
            {text: 'Hereditary spherocytosis', correct: 'false' },
            {text: 'Paroxysmal nocturnal hemoglobinuria', correct: 'false' },
            {text: 'Sickle cell anaemia', correct: true }
        ]
    },

    {
        question: 'Deletion of all four normal α-globin genes will most likely produce',
        answers: [
            {text: 'α thalassemia minor', correct: 'false' },
            {text: 'β thalassemia minor', correct: 'false' },
            {text: 'Cooley’s anemia', correct: 'false' },
            {text: 'Hemoglobin H disease', correct: 'false' },
            {text: 'Hydrops Fetalis', correct: true }
        ]
    },

    {
        question: 'Two days after receiving the antimalarial drug primaquine, a 27-year old black man develops sudden intravascular hemolysis resulting in a decreased hematocrit, hemoglobinemia, and hemoglobinuria. Examination of the peripheral blood reveals erythrocytes with a membrane defect forming “bite” cells; when crystal violet stain is applied, many Heinz bodies are seen. The most likely diagnosis is',
        answers: [
            {text: 'Hereditary spherocytosis', correct: 'false' },
            {text: 'Glucose-6-phosphate dehydrogenase deficiency', correct: true },
            {text: 'Paroxysmal nocturnal hemoglobinuria', correct: 'false' },
            {text: 'Autoimmune hemolytic anemia', correct: 'false' },
            {text: 'Microangiopathic hemolytic anemia', correct: 'false' }
        ]
    },

    {
        question: 'Which of the following red cell abnormalities is most indicative of hemolysis?',
        answers: [
            {text: 'Target cells', correct: 'false' },
            {text: 'Acanthocytes', correct: 'false' },
            {text: 'Schistocytes', correct: true },
            {text: 'Basophilic stippling', correct: 'false' },
            {text: 'Heinz bodies', correct: 'false' }
        ]
    },

    {
        question: 'Markedly decreased blood levels of which one of the listed substances are most characteristic of intravascular hemolysis?',
        answers: [
            {text: 'Alkaline Phosphatase', correct: 'false' },
            {text: 'Bilirubin', correct: 'false' },
            {text: 'Haptoglobin', correct: true },
            {text: 'Lactate dehydrogenase', correct: 'false' },
            {text: 'Methemoglobin', correct: 'false' }
        ]
    },

    {
        question: 'Disease caused by which one of the following sets of bacteria can be prevented by a toxoid vaccine?',
        answers: [
            {text: 'Bacillus anthracis and Clostridium botulinum', correct: 'false' },
            {text: 'Bacillus anthracis and Clostridium perfringens', correct: 'false' },
            {text: 'Bacillus cereus and Clostridium tetani', correct: 'false' },
            {text: 'Corynebacterium diphtheriae and Clostridium tetani', correct: true },
            {text: 'Corynebacterium diphtheriae and Listeria monocytogenes', correct: 'false' }
        ]
    },

    {
        question: 'Patient is a 40-year-old woman with diplopia and other signs of cranial nerve weakness. History reveals she grows her own vegetables and likes to preserve them in jars that she prepares at home. She is fond of her preserved string beans, which is what she ate uncooked in a salad for dinner last night. Which one of the following is the most likely cause of this clinical picture?',
        answers: [
            {text: 'Bacillus anthracis', correct: 'false' },
            {text: 'Clostridium botulinum', correct: true },
            {text: 'Clostridium perfringens', correct: 'false' },
            {text: 'Clostridium tetani', correct: 'false' },
            {text: 'Listeria monocytogenes', correct: 'false' }
        ]
    },

    {
        question: 'Gene components of HLA class I includes',
        answers: [
            {text: 'A, B, C', correct: true },
            {text: 'DR', correct: 'false' },
            {text: 'DQ', correct: 'false' },
            {text: 'DP', correct: 'false' },
            {text: 'DS', correct: 'false' }
        ]
    },

    {
        question: 'TRUE about corynebacterium diphtheriae are all, EXCEPT:',
        answers: [
            {text: 'Has metachromatic granules', correct: 'false' },
            {text: 'Does not invade deeper tissues', correct: 'false' },
            {text: "Toxigenicity demonstrated by Elek's test", correct: 'false' },
            {text: 'Toxin mediated by chromosomal gene', correct: true },
            {text: `You can't push the pseudomembrane😂`, correct: 'false' }
        ]
    },

    {
        question: 'Daisy head colonies are seen with:',
        answers: [
            {text: 'Staph. Aureus', correct: 'false' },
            {text: 'Corynebacterium diphtheriae', correct: true },
            {text: 'Staph. Pyogenes', correct: 'false' },
            {text: 'Anthrax', correct: 'false' },
            {text: 'Clostridium Botulium', correct: 'false' }
        ]
    },

    {
        question: 'MHC class I is exclusively present on the following cells except:',
        answers: [
            {text: 'Hepatocytes', correct: 'false' },
            {text: 'Thyroid Epithelial Cells', correct: 'false'},
            {text: 'Dendritic cells', correct: true },
            {text: 'Pneumocytes', correct: 'false' },
            {text: 'Microglia', correct: 'false' }
        ]
    },

    {
        question: 'The following is not a cause of normal anion gap metabolic acidosis:',
        answers: [
            {text: 'Renal tubular acidosis', correct: 'false' },
            {text: 'Diarrhoea  ', correct: 'false' },
            {text: 'Lactic acidosis', correct: true },
            {text: 'Ammonium chloride ingestion', correct: 'false' },
            {text: 'Vomiting', correct: 'false' }
        ]
    },

    {
        question: 'Deficiency of alpha1 antitrypsin causes which disease:',
        answers: [
            {text: 'Chronic bronchitis', correct: 'false' },
            {text: 'Emphysema', correct: true},
            {text: 'Pneumonia', correct: 'false' },
            {text: 'Tuberculosis', correct: 'false' },
            {text: 'Asthma', correct: 'false' }
        ]
    },

    {
        question: 'Albumin gene is located in which chromosome:',
        answers: [
            {text: '12', correct: 'false' },
            {text: '4', correct: true},
            {text: '10', correct: 'false' },
            {text: '7', correct: 'false' },
            {text: '18', correct: 'false' }
        ]
    }
]

randomQuestion = Math.floor(Math.random() * questions.length)




//Function to display questions and answers
displayQuestion = (questionText, answersTextA, answersTextB, answersTextC, answersTextD, answersTextE) => {
 
    questionh3.innerText = questionText
    smallAnswerBoxText[0].innerText = answersTextA
    smallAnswerBoxText[1].innerText = answersTextB
    smallAnswerBoxText[2].innerText = answersTextC
    smallAnswerBoxText[3].innerText = answersTextD
    smallAnswerBoxText[4].innerText = answersTextE

   
}



scoreReveal = () => {
    scorePercentage = Math.floor(score / questions.length *100)
    resultPage__circleInner.innerHTML = `<h1>${score}/${questions.length}</h1>`
    resultPage__circle.style.background = `conic-gradient( #7509c3 ${scorePercentage}%, transparent ${scorePercentage}% 100%)`;
    resultPage__circleInner.style.display = 'flex'
    resultPage__circleInner.style.alignItems = 'center'
    resultPage__circleInner.style.justifyContent = 'center'

   
}



startBtn.onclick = () => {
    shapeBg2.style.right = '-350px'
    shapeBg.style.left = '-350px'
    purpleCover.style.transform = 'translateY(-120%)'

    
    displayQuestion(
        questions[randomQuestion].question,
        questions[randomQuestion].answers[0].text,
        questions[randomQuestion].answers[1].text,
        questions[randomQuestion].answers[2].text,
        questions[randomQuestion].answers[3].text,
        questions[randomQuestion].answers[4].text,
    
    )   

    
    queNumberRectangle.innerText = `Question ${questionNumber++} of ${questions.length}`
    
    smallAnswerBoxes.forEach((box) => {
        box.style.backgroundColor = '';
        box.style.color = '';
       // Reset text color as well
    });
    
    let answerSelected = false
 
    smallAnswerBoxes.forEach((smallbox, index) => {       
        smallbox.onclick = () => {
            if (!answerSelected){
                smallAnswerBoxes.forEach((box) => {
                    box.style.backgroundColor = '444';
                    box.style.color = '';
                   // Reset text color as well
                });

                answerSelected = true            

            //   smallbox.style.backgroundColor = ''

          
            // console.log(questions[randomQuestion].answers[index].correct)
           if (questions[randomQuestion].answers[index].correct === true){
            console.log('yayy')
            smallbox.style.backgroundColor = '#00cc66'
            score+=1
            console.log(score)
           } else if (questions[randomQuestion].answers[index].correct !== true){
            console.log('nahh')
            smallbox.style.backgroundColor = '#ff3333'

            smallAnswerBoxes.forEach((correctBox, index) => {
                if ( questions[randomQuestion].answers[index].correct === true){
                    correctBox.style.backgroundColor = '#00cc66' 
                    correctBox.style.color = 'white' 
                }           

                })
            }
        }

    }   
})
}

//Calling displayQuestion on click of nextbtn
nextbtn.onclick = () => {

    queNumberRectangle.innerText = `Question ${questionNumber++} of ${questions.length}`
    let randomQuestion

    do {
        randomQuestion = Math.floor(Math.random() * questions.length)
    } while (numbersDone.includes(randomQuestion))
 

    displayQuestion(
        questions[randomQuestion].question,
        questions[randomQuestion].answers[0].text,
        questions[randomQuestion].answers[1].text,
        questions[randomQuestion].answers[2].text,
        questions[randomQuestion].answers[3].text,
        questions[randomQuestion].answers[4].text,
    
    )   
    
    smallAnswerBoxes.forEach((box) => {
        box.style.backgroundColor = '';
        box.style.color = '';
       // Reset text color as well
    });
    
    let answerSelected = false
 
    smallAnswerBoxes.forEach((smallbox, index) => {       
        smallbox.onclick = () => {
            if (!answerSelected){
                smallAnswerBoxes.forEach((box) => {
                    box.style.backgroundColor = '444';
                    box.style.color = '';
                   // Reset text color as well
                });

                answerSelected = true            

            //   smallbox.style.backgroundColor = ''

          
            // console.log(questions[randomQuestion].answers[index].correct)
           if (questions[randomQuestion].answers[index].correct === true){
            console.log('yayy')
            smallbox.style.backgroundColor = '#00cc66'
            score+=1
            console.log(score)
           } else if (questions[randomQuestion].answers[index].correct !== true){
            console.log('nahh')
            smallbox.style.backgroundColor = '#ff3333'

            smallAnswerBoxes.forEach((correctBox, index) => {
                if ( questions[randomQuestion].answers[index].correct === true){
                    correctBox.style.backgroundColor = '#00cc66' 
                    correctBox.style.color = 'white' 
                }           

                })
            }
        }

    }   
})

    numbersDone.push(randomQuestion)
    console.log(numbersDone)

    nextbtnClicks++

    if (nextbtnClicks === questions.length){
        console.log('done')
        bigAnswerBox.style.display = 'none'
        queNumberRectangle.style.display = 'none'
        nextbtn.style.display = 'none'
        resultPage.style.display = 'block'
        scoreReveal()       
        reloadBtn.style.display = 'flex'
        reloadBtn.onclick = () => {
            location.reload()
        }
        reloadBtn.style.transform = 'translateY(20px)'
        
    }
    
} 






