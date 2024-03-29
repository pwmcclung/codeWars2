states_needed = set(['mt', 'wa', 'or', 'od', 'nv', 'ut', 'ca', 'az'])

stations = {}
stations['kone'] = set(['id', 'nv', 'ut'])
stations['ktwo'] = set(['wa', 'id', 'mt'])
stations['kthree'] = set(['or', 'nv', 'ca'])
stations['kfour'] = set(['nv', 'az'])
stations['kfive'] = set(['ca', 'az'])

final_stations = set()

best_station = None
states_covered = set()
while states_needed:
    best_station = None
    states_covered = set()
    for station, states_for_station in stations.items():
        covered = states_needed & states_for_station  # a set intersection
        if len(covered) > len(states_covered):
            best_station = station
            states_covered = covered

states_needed -= states_covered
final_stations.add(best_station)

print(final_stations)
