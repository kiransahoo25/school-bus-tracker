import { MapPin, Clock, CheckCircle2 } from "lucide-react";

interface StudentStatusCardProps {
  studentName: string;
  grade: string;
  section: string;
  routeName: string;
  stopName: string;
  status: "BOARDED" | "PENDING" | "DROPPED" | "ABSENT";
  etaMinutes?: number;
}

export default function StudentStatusCard({
  studentName,
  grade,
  section,
  routeName,
  stopName,
  status,
  etaMinutes,
}: StudentStatusCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="p-5 border-b border-gray-100 flex justify-between items-start">
        <div>
          <h3 className="text-lg font-bold text-gray-900">{studentName}</h3>
          <p className="text-sm text-gray-500">
            Grade {grade}-{section} • {routeName || "No Route"}
          </p>
        </div>
        {status === "BOARDED" && (
          <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
            <CheckCircle2 size={14} /> On Board
          </span>
        )}
        {status === "PENDING" && (
          <span className="inline-flex items-center gap-1.5 py-1 px-2.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
            <Clock size={14} /> Waiting
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-blue-50 p-2 rounded-lg text-blue-600">
            <MapPin size={20} />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-900">
              Pickup / Drop Stop
            </p>
            <p className="text-sm text-gray-500">
              {stopName || "Not Assigned"}
            </p>
          </div>
        </div>

        {status === "BOARDED" && etaMinutes !== undefined && (
          <div className="bg-gray-50 p-3 rounded-lg flex justify-between items-center text-sm">
            <span className="text-gray-600">Arriving at school in</span>
            <span className="font-bold text-blue-600">{etaMinutes} mins</span>
          </div>
        )}
      </div>
    </div>
  );
}
