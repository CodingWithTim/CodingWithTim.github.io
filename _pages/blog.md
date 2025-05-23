---
layout: page
permalink: /blogs/
title: Blogs
# description: 
nav: true
nav_order: 5
---

1. [A Hitchhiker’s Guide to Undergrad Research](#a-hitchhikers-guide-to-undergrad-research)

---

# A Hitchhiker’s Guide to Undergrad Research

*This guide is what I wish my past self—two years ago—had read before starting research. Hopefully you will find this helpful!*

## Introduction

A little about myself... and why should you listen to my advice on anything research-related?

*Disclaimer: I can only really speak for CS-related research, with a primary focus on Machine Learning and Artificial Intelligence. If that interests you, you should read this blog :)*

I was a Berkeley EECS undergrad, Class of 2025. My undergraduate research focuses on the intersection of large model evaluation and training to improve model capabilities and reliability. I’ve been a researcher at Berkeley Sky Computing Lab for two years, where I am part of the Chatbot Arena team advised by Professors Ion Stoica, Joseph E. Gonzalez, and Jiantao Jiao. I have also been a Research Engineer on the LLM alignment/post-training team at Nexusflow for over a year, where I was fortunate enough to have access to H100s and co-trained open-weight LLMs that surpassed ChatGPT and Claude. I also spent a semester part-time at Google AI as a student researcher where I worked on reasoning models.

During my undergraduate years, I have published multiple papers, including first-author papers and conference papers at ICML, ICLR, and EMNLP, totaling over 1000 citations on Google Scholar. I also co-published papers with Google AI and served as an ICLR and ICML conference reviewer.

I was admitted to Berkeley EECS, MIT CSAIL, Princeton NLP, CMU's CSD, and UW's NLP for PhD to continue pursuing machine learning research. However, I decided to defer my PhD to join xAI and its mission to build superintelligence. 

I want to take this moment to express my deepest gratitude to my advisors, PostDocs, PhD mentors, friends, and family. Without their support, I wouldn’t have been able to accomplish any of this. In hindsight, I was incredibly lucky to meet the right people at the right time to work on the right things. So, I want to share the knowledge and lessons I’ve learned throughout my research journey, as well as insights from those around me. See a [list](#wonderful-people) of these wonderful people. 

## Table of Contents
1. [Should You Consider Research?](#should-you-consider-research)
2. [What Kind of Classes to Take?](#what-kind-of-classes-should-you-take)
3. [How to Get Into Research?](#how-to-get-into-research)
4. [Advices to Students in Research](#advices-to-students-in-research)
5. [Master’s / PhD Applications](#master--phd-applications)
6. [Stress from Research](#stress-from-research)

## Should You Consider Research?
If you’re interested in graduate school (MS or PhD), the answer is yes.

Simply put, grad school applications require letters of recommendation (typically three), and they are everything. A strong letter comes from a research professor who can speak to your research ability. Not your software engineering manager. Not your grandma. Period. GPA, technical experience, and extracurriculars are secondary to strong recommendations. More on this later.

If you want to work in a research role (aka tired of SWE), then the answer is yes. If your goal is to do research as a career (in industry or academia), then duh, you should do research. However, I cannot guarantee that you’ll never touch SWE tasks again—everything in moderation.

If you enjoy owning your work or diving deep into unexplored ideas, and not afraid your efforts might turn up empty, research might be for you. Ask yourself: Do you like working on problems that don’t have clear answers, and defining the questions yourself? Or do you prefer well-defined tasks? Research is all about the former.

If you want to work on Machine Learning, specifically the research aspect more than engineering, then the answer is definitely yes.

If you want to work on machine learning—specifically the research side, rather than just engineering—then yes, research is the right path. Most roles focused on genuine ML research (not just wrapping GPT-4 in an API) require significant experience and often at least a Master’s degree, sometimes a PhD. If you’re aiming for frontier labs like OpenAI, DeepMind, xAI, etc., top candidates are almost always PhDs or have 5–10 years of industry experience. That said, a PhD isn’t an absolute requirement; you just need to be as strong as an above-average 3rd or 4th-year PhD student at a top CS grad program. In other words, grad school and undergrad research are usually necessary stepping stones. Additionally, by preparing for and completing a successful PhD, you’re also making yourself a very strong candidate for top industry research roles.

That being said, ML opportunities are growing, and there are plenty of engineering-focused roles (like Machine Learning Engineer) that don’t require research experience.

If you want to become a professor, do I even need to explain? Sure, most professors don’t make as much as they could in industry (e.g., Senior Staff Research Scientist), but they gain something priceless:
1. A lot of freedom (not tied to company profit or politics)
2. Mentorship and help shape the next generation of researchers.

If none of this appeals to you, spare yourself years of pain and just become a software engineer. Otherwise, be ready for some real hardship—LOL.

General advice: Try everything at least once during undergrad. You’ll never know if you like SWE unless you do an internship, and you’ll never know if you like research unless you try it. I know people who hate research, and that’s fine. I personally loved it. On the other hand, I interned at AMD for SWE, but it was boring (no offense, research is just in my DNA).

## What Kind of Classes Should You Take?

I came to Berkeley without even daring to consider machine learning. I heard how competitive the field was and didn’t think I was good enough. I got a B+ in EECS 16A (intro to linear algebra & systems) in my first semester and thought AI was way out of reach.

Then, in Fall 2022 (sophomore year), I took EECS 127 (Convex Optimization), an insanely math-heavy upper-div course. I grinded office hours every week, studied my ass off, and ended up loving it—so much that I later became a TA. That class gave me the confidence and passion to explore machine learning.

The semester after, I took CS 189 (Machine Learning) and CS 182 (Deep Learning)—both brutal courses. But thanks to EECS 127, I had the math intuition to survive. I was lucky to be able to enroll (pre-ChatGPT hype), which is literally impossible for a sophmore now.

The semester after (junior year), I started research at Sky Computing Lab and taking CS 285 (Deep RL). Again, insanely lucky.

So, why do I talk about classes?

Because you should take 1–2 upper-div ML classes before starting ML research.

**Reasons**:
1. Easier to get into research.
2. Makes research more enjoyable.
3. Theoretical knowledge gives you strong intuitions.

**Recommended Classes**:

✅ EECS 127 (Optimzation) – Take before ML research.

✅ CS 189 (Intro to ML) – Take before ML research.

✅ CS 182 (Deep NN) – Optional, but helpful.

✅ EECS 126 (Probability Theory) – Recommended, before CS 189. Great for building intuitions.

✅ CS 285 (Deep RL) – If Sergey feels like teaching (once in a blue moon). Super fruitful class!

❌ CS 188 (Intro to AI) – Useless.

❌ CS 288 (NLP) – Mid class, better to self-learn.

**General Advice**: In general, I do not recommend starting research as a freshman or sophomore. First, laser-focus on taking ML-related classes and building your fundamental understanding of the theories. Then, spend the rest of your undergrad years laser-focused on research. 

## How to Get Into Research?

*Before the hows, you need to know who to look for.*

The ideal research mentor is NOT a professor. They are 3rd or 4th-year PhD students whose advisor is an EECS professor.

Why?
1. Professors are too busy. They have PhD students to mentor. They most likely don’t have time to invest in guiding you.
2. PhD students are experienced and need co-authors. Working with them = high chance of co-authorship on strong papers.
3. 3rd/4th-year PhD students are research veterans. They know how to get into top conferences.
4. Most PhD students can get you a strong letter of recommendation from their advisor, basically equivalent to working with the professor directly in that regard.

A 1st/2nd-year PhD student can also be good, just less optimal.

URAP (Undergraduate Research Apprentice Program) is the most popular research opportunity at Berkeley, but here’s the honest truth:
1. Mostly interdisciplinary. (AI + Education, AI + Bats, etc.)
2. Non-EECS advisors. (Weaker letters for CS/EECS grad school.)
3. Competitive, GPA-heavy.
4. Mixed experiences. Most of my friends had bad ones.

**Best Methods to Get Research**

✅ Method 1: Meet the PhD student in person, such as attending their talk (insanely high yield).

✅ Method 2: Cold email PhD students (moderate yield).

Any other method? Not worth your time.

Personally, I only did method 1 and I had 100% rate of success (first time with a BAIR PhD student, second time with Chatbot Arena).

**Words of encouragement**: My research partner started research in the same semester which he applied to 5th Year Master (senior year fall semester). In the semesters before, he cold emailed over 20 PhD students to no avail despite having a 4.0 GPA. In his senior year, he was able to publish a top conference paper and accepted into BAIR's 5th Year Master. He said having completed CS189, EECS127, and EECS126 faciliated his research. Fast forward to today, he was also recently admitted to all the top PhD programs. Hence, don't be discouraged and it is never too late to give up!

Here is a cold email template that has seen success. Remember to keep it concise and straight forward.

---

Hi XXX,

My name is XXX and I am an undergraduate computer science student here at Berkeley. I'm interested in `insert_what_this_phd_student_does`. I was really interested in your recent paper `"insert_paper_name"`. I'm ready to contribute 15+ hours a week to research as well as full time in the summer to learn from and contribute to your research work. In the future, I'm looking to continue research in a graduate school setting.

Last spring semester, I worked on <any_relevant_background_not_too_long>...

Attached below is my resume and transcript*.

Thank you for your time and consideration,


XXX

\* transcript is optional. 

---

## Advices to Students in Research
*You gotta let it rip.  –––Evan Frick*

(No, not that kind of rip—I'm talking about research, people.)

Let it rip means go all in: dive into your research with enthusiasm and energy. Be fearless—read extra papers, run those experiments, and pitch wild ideas. The more you put into research, the more you’ll get out of it.

**Research is Priority.** 

Research is, low-key, more important than your coursework. Yes, grades matter, but when it comes to impressing grad schools or industry, your research experience and output (publications, posters, code) can matter even more than your GPA. Of course, don’t tank your classes—but remember to invest serious time in your projects.

**Network and Be Present.**
* Talk to the PhD students. They know the ropes, and you can learn a lot from their war stories. Most of them are super friendly and fun to talk to!
* Show up to group meetings. You’ll stay in the loop and pick up on all sorts of new research directions.
* Be social. Don’t shy away from in-person interactions. A quick chat in the hallway can spark new ideas or collaborations.


**Voice your wants and ideas.**

If you’re aiming for grad school and want publications, say so—loud and clear. Too many undergrads never mention they want to publish, then wonder why they’re stuck on projects that don’t lead to papers. It’s fine to do GitHub PRs or smaller tasks, but make sure you’re also working towards something publishable if that’s your goal. Own your ambition!

**Be Independent––but Communicate.** 
* Don’t expect babysitting. PhD students are busy. They’ll give you guidance, but they can’t hold your hand.
* Keep them updated. A quick Slack message or short chat about your progress goes a long way.
* Stay curious. Ask about what they’re working on, or share interesting things you come across.

**Work with Advisors Who Help You Grow.**

Not all advisors are created equal. Some truly want to mentor undergrads and watch you flourish. Others might look at you as free labor. Protect yourself—if you feel like you’re just being dumped with grunt work and not learning anything, speak up or consider switching labs. Your growth and knowledge as a researcher should be the number one priority.

**Drive Your Work.**

This might be the single most important thing: You should be the one pushing your part of the research. A PhD student or professor shouldn’t have to remind you constantly to run experiments or collect data. Take the initiative, propose new directions, and show them you’re serious. Essentially, you’re the project’s engine.

**My further opinions.** 

A successful undergrad research career will take more than 20 hours a week of commitment. I spent around 40 hours on average on research throughout my Junior and Senior year, with some week exceed 60 hours. I don't really balance research with other things like coursework, social life, etc. I stayed in the lab many nights and over the weekend (whenever my friends check my location, it is always Sky Lab lol). I rather do research than do homework or go to parties. But you shouldn't force yourself to commit, if you are truly passionate about the field, you will naturally spent hours working. As for me, I am obsessed and I think about how to improve model training and evaluation all the time, walking on campus, right before I fall asleep, etc. But I truly enjoyed the process, and I don't regret it at all.

## Master / PhD Applications

*It is not a holistic process by any means lol.*

**Letters of Recommendation.** They’re Everything.

- **Not just a letter!** Your professor will often rank you in the letter (e.g., “best student in 5 years” or “top 5%”). This ranking is the most important aspect to your application.
- **Who wrote the letter?** Letters from your research professors are what matters. Industry letters tend to not matter. Rare exceptions exist (e.g., if you somehow got John Schulman to vouch for you), but for the rest of us, focus on professors who’ve supervised your research.

In short, a glowing letter from a big-name research professor is worth its weight in gold. A competitive PhD applicant usually have 1 strong letter of recommendation from a research professor. If all 3 letter of recommendations are from research professors, then you are at the top of the game.

**Publications & Research Experience**

- Right after letters of rec. If you have a paper or two, even if it’s in a workshop or smaller conference, it proves you know how to conduct research and communicate findings.
- Your CV should highlight publications, projects, and any notable research-related experiences. If you have to choose between a stacked GPA and a real publication, the publication often wins.

**Statement of Purpose & Personal Essays.**

- **Statement of Purpose (SOP):** This is where you explain why you want to do research and how your background aligns with the program. If you want an example, check out my <a href="../assets/pdf/SOP.pdf"> PhD SOP</a>.
- **Personal Essays:** Usually more about who you are as a person—your motivations, experiences, and potential for success. Write honestly, but also show passion.

**GPA.** Less important than you think.
- **Around 3.7?** Great, you’re good. Your letters of recommendation and research experiences speak far louder than GPA once you cross a certain GPA threshold: typically 3.5. For reference, my undegrad GPA is 3.72 and I was admitted into more PhD programs than most people with a 4.0.

If you’re applying to a **5th-year Master’s program**, here are the important things:

Is Your Advisor an EECS Professor? 5th Year Master program is an EECS program, so if your research professor is an EECS professor then they can get you in easily. Otherwise, it is an uphill battle.

Does Your Advisor Want You? If their letter of recommendation is tepid (or they don’t have time for you), that can sink your chances. A strong rec is everything here.

**Storytime:** One of my friend who had a 3.5 GPA was admitted to the Berkeley's 5th Year Master program for robotics. He has significant research experience and a good connection with his research adviser, an senior EECS professor. *GPA is overrated lol.*

---

**Important Notes**

Does your professor actually care about the project you’re working on, or are you a side-quest in their research empire? The bigger the impact of your project, the more they will care about you. For example, Chatbot Arena has the highest priority for Ion, which is why I was able to ride on its impact.

Some labs are basically sweatshops for undergrads with zero mentorship or impact. If that’s you, consider switching advisors if possible.

Some professors prefer not to take their own undergrads for Master’s/PhD (they call it “academic inbreeding”). Others love to keep homegrown talent. It is good to know which side your professor is on.

How many other undergrads in your lab are applying at the same time? Each professor can only take around 2-4 5th Year Master a year and a limit amount of PhD students whose number depends on their budget. The more PhD students that are graduating in the lab when you are applying to for PhD, the higher chances for you to get admitted.

Are you close with the PhD students who might be reviewing your application? At most schools, including Berkeley, PhD and MS admission is a two rounds system. In the first round, PhD students in each group (e.g., MLSys, ML Theory) will be reviewing all the applicants to that field of interest. They will score you and this determines whether you make it to the next round, the professor round. If you pass the student round, your application will be placed in a pile and then professor will pick whichever application that they are interested for review. In some cases, if the professor really likes you, a professor has the ability to "fix" the admission and correct the "mistake" in the student round and pull your application into the second round. Yup!

The professor’s network can open doors. They might drop a call or an email to colleagues at other institutions. In many cases, professors will admit PhDs that are recommended by professors who were once the professors' student. For example, the professor who admitted me into MIT were once a PhD student in the same lab led by Ion and two of his student from MIT later became professors in my lab today. The network matters!

---

## Stress from Research
 
I am still working on this section... TT

## Wonderful People

I will be forever grateful for these people:

[Wei-Lin Chiang](https://infwinston.github.io/), [Lianmin Zheng](https://lmzheng.net/), [Banghua Zhu](https://people.eecs.berkeley.edu/~banghua/), [Anastasios Nikolas Angelopoulos](https://people.eecs.berkeley.edu/~angelopoulos/), [Lisa Dunlap](https://www.lisabdunlap.com/), [Joseph E. Gonzalez](https://people.eecs.berkeley.edu/~jegonzal/), [Jiantao Jiao](https://people.eecs.berkeley.edu/~jiantao/), [Ion Stoica](https://people.eecs.berkeley.edu/~istoica/).

<!-- $$\text{success} = \min(\text{network}, \text{talent}, \text{hard work}) + \text{luck}$$ -->