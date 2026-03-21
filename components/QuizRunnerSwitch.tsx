"use client";

import TravelTrainRunner from "./TravelTrainRunner";
import LoveTypeRunner from "./LoveTypeRunner";
import ColorPsychologyRunner from "./ColorPsychologyRunner";
import GenericQuizRunner from "./GenericQuizRunner";

import { travelTrainTest } from "@/lib/travel-train";
import { loveTypeTest } from "@/lib/love-type";
import { colorTest } from "@/lib/color-psychology";
import { mbtiSimpleTest, findMbtiProfile } from "@/lib/mbti-simple";
import {
  communicationStyleTest,
  findCommunicationProfile,
} from "@/lib/communication-style";
import { moneySenseTest, findMoneySenseProfile } from "@/lib/money-sense";
import { conflictStyleTest, findConflictProfile } from "@/lib/conflict-style";
import {
  creativityTypeTest,
  findCreativityProfile,
} from "@/lib/creativity-type";
import { timeManagementTest, findTimeManagementProfile } from "@/lib/time-management-style";
import { friendshipStyleTest, findFriendshipProfile } from "@/lib/friendship-style";
import { decisionMakingTest, findDecisionMakingProfile } from "@/lib/decision-making-style";
import { petPersonalityTest, findPetPersonalityProfile } from "@/lib/pet-personality-match";
import { socialEnergyTest, findSocialEnergyProfile } from "@/lib/social-energy";

type Props = { slug: string };

export default function QuizRunnerSwitch({ slug }: Props) {
  switch (slug) {
    case "travel-train":
      return <TravelTrainRunner test={travelTrainTest} />;
    case "love-style-test":
      return <LoveTypeRunner test={loveTypeTest} />;
    case "color-psychology":
      return <ColorPsychologyRunner test={colorTest} />;
    case "mbti-simple":
      return (
        <GenericQuizRunner
          test={mbtiSimpleTest}
          findProfile={findMbtiProfile}
          theme={{
            progressGradient: "from-violet-500 to-fuchsia-500",
            headerGradient: "from-violet-600 to-fuchsia-600",
            optionActiveClass: "border-violet-500 bg-violet-50 text-violet-700",
            bulletColor: "bg-violet-500",
            shareButtonClass: "bg-violet-600 hover:bg-violet-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.personalityStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">성격 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {p.personalityStyle as string}
                    </p>
                  </div>
                )}
                {Array.isArray(p.compatibleTypes) && p.compatibleTypes.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">궁합이 좋은 유형</h3>
                    <div className="flex flex-wrap gap-2">
                      {(p.compatibleTypes as string[]).map((t, i) => (
                        <span key={i} className="rounded-full bg-violet-50 px-3 py-1.5 text-xs font-medium text-violet-700">{t}</span>
                      ))}
                    </div>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    case "communication-style":
      return (
        <GenericQuizRunner
          test={communicationStyleTest}
          findProfile={findCommunicationProfile}
          theme={{
            progressGradient: "from-sky-500 to-blue-500",
            headerGradient: "from-sky-600 to-blue-600",
            optionActiveClass: "border-sky-500 bg-sky-50 text-sky-700",
            bulletColor: "bg-sky-500",
            shareButtonClass: "bg-sky-600 hover:bg-sky-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.communicationStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">소통 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.communicationStyle as string}</p>
                  </div>
                )}
                {Array.isArray(p.strengthsInTeam) && p.strengthsInTeam.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">팀에서의 강점</h3>
                    <ul className="space-y-2">
                      {(p.strengthsInTeam as string[]).map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {Array.isArray(p.improvementTips) && p.improvementTips.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">개선 포인트</h3>
                    <ul className="space-y-2">
                      {(p.improvementTips as string[]).map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 text-sky-500">💡</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    case "money-sense":
      return (
        <GenericQuizRunner
          test={moneySenseTest}
          findProfile={findMoneySenseProfile}
          theme={{
            progressGradient: "from-emerald-500 to-teal-500",
            headerGradient: "from-emerald-600 to-teal-600",
            optionActiveClass: "border-emerald-500 bg-emerald-50 text-emerald-700",
            bulletColor: "bg-emerald-500",
            shareButtonClass: "bg-emerald-600 hover:bg-emerald-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.moneyStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">금전 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.moneyStyle as string}</p>
                  </div>
                )}
                {Array.isArray(p.financialTips) && p.financialTips.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">재무 팁</h3>
                    <ul className="space-y-2">
                      {(p.financialTips as string[]).map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 text-emerald-500">💰</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    case "conflict-style":
      return (
        <GenericQuizRunner
          test={conflictStyleTest}
          findProfile={findConflictProfile}
          theme={{
            progressGradient: "from-orange-500 to-red-500",
            headerGradient: "from-orange-600 to-red-600",
            optionActiveClass: "border-orange-500 bg-orange-50 text-orange-700",
            bulletColor: "bg-orange-500",
            shareButtonClass: "bg-orange-600 hover:bg-orange-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.conflictStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">갈등 대처 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.conflictStyle as string}</p>
                  </div>
                )}
                {Array.isArray(p.strengths) && p.strengths.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">강점</h3>
                    <ul className="space-y-2">
                      {(p.strengths as string[]).map((s, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-500" />{s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {Array.isArray(p.growthAreas) && p.growthAreas.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">성장 포인트</h3>
                    <ul className="space-y-2">
                      {(p.growthAreas as string[]).map((g, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 text-orange-500">🌱</span>{g}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    case "creativity-type":
      return (
        <GenericQuizRunner
          test={creativityTypeTest}
          findProfile={findCreativityProfile}
          theme={{
            progressGradient: "from-amber-500 to-yellow-500",
            headerGradient: "from-amber-600 to-yellow-500",
            optionActiveClass: "border-amber-500 bg-amber-50 text-amber-700",
            bulletColor: "bg-amber-500",
            shareButtonClass: "bg-amber-600 hover:bg-amber-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.creativeStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">창의 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.creativeStyle as string}</p>
                  </div>
                )}
                {p.bestEnvironment && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">최적의 환경</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.bestEnvironment as string}</p>
                  </div>
                )}
                {Array.isArray(p.creativeTips) && p.creativeTips.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">창의력 팁</h3>
                    <ul className="space-y-2">
                      {(p.creativeTips as string[]).map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 text-amber-500">✨</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    case "time-management-style":
      return (
        <GenericQuizRunner
          test={timeManagementTest}
          findProfile={findTimeManagementProfile}
          theme={{
            progressGradient: "from-cyan-500 to-teal-500",
            headerGradient: "from-cyan-600 to-teal-600",
            optionActiveClass: "border-cyan-500 bg-cyan-50 text-cyan-700",
            bulletColor: "bg-cyan-500",
            shareButtonClass: "bg-cyan-600 hover:bg-cyan-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.timeStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">시간 관리 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.timeStyle as string}</p>
                  </div>
                )}
                {Array.isArray(p.productivityTips) && p.productivityTips.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">생산성 팁</h3>
                    <ul className="space-y-2">
                      {(p.productivityTips as string[]).map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 text-cyan-500">⏰</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    case "friendship-style":
      return (
        <GenericQuizRunner
          test={friendshipStyleTest}
          findProfile={findFriendshipProfile}
          theme={{
            progressGradient: "from-pink-500 to-rose-500",
            headerGradient: "from-pink-600 to-rose-600",
            optionActiveClass: "border-pink-500 bg-pink-50 text-pink-700",
            bulletColor: "bg-pink-500",
            shareButtonClass: "bg-pink-600 hover:bg-pink-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.friendshipStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">우정 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.friendshipStyle as string}</p>
                  </div>
                )}
                {Array.isArray(p.relationshipTips) && p.relationshipTips.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">관계 팁</h3>
                    <ul className="space-y-2">
                      {(p.relationshipTips as string[]).map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 text-pink-500">💝</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    case "decision-making-style":
      return (
        <GenericQuizRunner
          test={decisionMakingTest}
          findProfile={findDecisionMakingProfile}
          theme={{
            progressGradient: "from-indigo-500 to-blue-500",
            headerGradient: "from-indigo-600 to-blue-600",
            optionActiveClass: "border-indigo-500 bg-indigo-50 text-indigo-700",
            bulletColor: "bg-indigo-500",
            shareButtonClass: "bg-indigo-600 hover:bg-indigo-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.decisionStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">의사결정 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.decisionStyle as string}</p>
                  </div>
                )}
                {Array.isArray(p.decisionTips) && p.decisionTips.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">결정력 팁</h3>
                    <ul className="space-y-2">
                      {(p.decisionTips as string[]).map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 text-indigo-500">🎯</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    case "pet-personality-match":
      return (
        <GenericQuizRunner
          test={petPersonalityTest}
          findProfile={findPetPersonalityProfile}
          theme={{
            progressGradient: "from-lime-500 to-green-500",
            headerGradient: "from-lime-600 to-green-600",
            optionActiveClass: "border-lime-500 bg-lime-50 text-lime-700",
            bulletColor: "bg-lime-500",
            shareButtonClass: "bg-lime-600 hover:bg-lime-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.petStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">반려동물 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.petStyle as string}</p>
                  </div>
                )}
                {Array.isArray(p.careTips) && p.careTips.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">케어 팁</h3>
                    <ul className="space-y-2">
                      {(p.careTips as string[]).map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 text-lime-500">🐾</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    case "social-energy":
      return (
        <GenericQuizRunner
          test={socialEnergyTest}
          findProfile={findSocialEnergyProfile}
          theme={{
            progressGradient: "from-purple-500 to-violet-500",
            headerGradient: "from-purple-600 to-violet-600",
            optionActiveClass: "border-purple-500 bg-purple-50 text-purple-700",
            bulletColor: "bg-purple-500",
            shareButtonClass: "bg-purple-600 hover:bg-purple-700",
          }}
          renderExtra={(profile) => {
            const p = profile as Record<string, unknown>;
            return (
              <>
                {p.socialStyle && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-2">소셜 스타일</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{p.socialStyle as string}</p>
                  </div>
                )}
                {Array.isArray(p.energyTips) && p.energyTips.length > 0 && (
                  <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
                    <h3 className="font-bold text-gray-900 mb-3">에너지 관리 팁</h3>
                    <ul className="space-y-2">
                      {(p.energyTips as string[]).map((t, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <span className="mt-0.5 text-purple-500">⚡</span>{t}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            );
          }}
        />
      );
    default:
      return null;
  }
}
