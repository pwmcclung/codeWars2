from datetime import timedelta
import copy
def get_start_time(schedules, duration):
    sched = copy.deepcopy(schedules)
    possible = timedelta(minutes = duration)
    for i in sched:
        if i != []:
            i.insert(0, ["09:00", "09:00"])
            i.append(["19:00", "19:00"])
    
    for i in range(len(sched)):
        for j in range(len(sched[i])):
            for k in range(len(sched[i][j])):
                sched[i][j][k] = timedelta(hours = int(sched[i][j][k][:2]), 
                minutes = int(sched[i][j][k][3:])) 
    
    time = []
    for i in range(len(sched)):
        temp = []
        for j in range(len(sched[i])-1):
            if sched[i][j][1] < sched[i][j+1][0]:
                if sched[i][j+1][0] - sched[i][j][1] >= possible:
                    temp.append( [sched[i][j][1], sched[i][j+1][0]] )
        if temp != []:
            time.append(temp)
    
    if len(time) < len(sched):
        return None
    
    for c in time[0]:
        finish = [c]
        for i in range( 1, len(time) ):
            for j in range( len(time[i]) ):
                if finish[-1][0] == time[i][j][0]:
                    finish.append(time[i][j])
                if finish[-1][0] < time[i][j][0]:
                    if (time[i][j][0] + possible <= min(finish[i][1] for i in range(len(finish))) 
                    and time[i][j][1] - possible >= max(finish[i][0] for i in range(len(finish)))):
                        finish.append(time[i][j])
                if finish[-1][0] > time[i][j][0]:
                    if time[i][j][1]-max(finish[i][0] for i in range(len(finish))) >= possible:
                        finish.append(time[i][j])
        if len(finish) == len(sched):
            break
    
    if len(finish) < len(sched):
            return None
    return str(max(finish[i][0] for i in range(len(finish)))).rjust(8,"0")[:5]