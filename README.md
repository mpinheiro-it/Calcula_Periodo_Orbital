# Calcula_Periodo_Orbital

![wyBcwFyH2FpO8](https://user-images.githubusercontent.com/79663457/132573249-41a1418e-ec51-41e3-a325-b11b733d42c2.gif)


Recentemente conclui o curso de Algoritmos e Estruturas de Dados em Javascript do FreeCodeCamp.org e me deparei com um exercício interessante sobre o cálculo de períodos orbitais.

O período orbital (também conhecido como período de revolução) é o tempo que um determinado objeto astronômico leva para completar uma órbita em torno de outro objeto. Por exemplo, o período orbital da Terra em relação ao Sol é de 365 dias.

No caso deste exercício, o corpo sendo orbitado é o planeta Terra. A função recebe uma array que contém um ou mais objetos com as propriedades "name" e "avgAlt" (altitude média). Então aplicamos a seguinte fórmula matemática para calcular o período orbital de cada um deles:

![image](https://user-images.githubusercontent.com/79663457/132568668-fb3a3307-f6a0-46c9-a7ae-69325a3f345d.png)

Fonte: https://pt.wikipedia.org/wiki/Per%C3%ADodo_orbital

Onde:

a = soma da altitude média (recebida como parametro) e o raio da terra (valor fixo de 6367.4447 Km)<br>
μ = GM é o parametro gravitacional padrão da Terra

Ex: o período orbital do Sputnik há uma altitude média de 35873.5553KM é de 86400 segundos.

Interessante, não? Além de um bom exercício para fórmulas matemáticas no JS é também um bom lembrete das muitas curiosidades presentes em nosso universo.


