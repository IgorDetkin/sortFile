# Сортировка файла

Задание: Имеется файл размером 1 тб, состоящий из строк. Нужно написать программу, которая сможет отсортировать этот файл на машине, которой доступно 500мб ОЗУ.


#### Процесс выполнения задания состоит из 2 этапов: 
    1. генерируем файл в качестве примера. 
    2. сортируем сгенерированный файл. 


Сначала скопируйте репозиторий себе на компьютер. Далее для запуска процесса генерации файла откройте командную строку и в ней перейдите в папку с проектом. Затем введите команду 
`node createFile`  
Дождитесь создания нового файла.   


для запуска сортировки получившегося файла в папке с проектом введите команду `node sortFile_1.js`, указав в команде путь 
к исходному файлу и указав куда сохранять получившийся файл и название нового файла, например "node sortFile_1 ./big.file ../../newBigSort.file".

Я использовал два способа, один из которых точно использует малое количество оперативной памяти, с помощью метода pipe. Нагрузка на ОЗУ компьютера не превышала 60мб.

Второй способ использует все доступные ресурсы оперативной памяти и затрагивает бОльшее количество ресурсов компьютера в целом. 
Считаю второй способ не оптимальным, но оставлю его здесь в качестве менее подходящей, но возможной альтернативы. 