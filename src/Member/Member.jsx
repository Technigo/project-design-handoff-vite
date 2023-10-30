import { MemberCard } from "./MemberCard"
export const Member = () => {
    return (
        <div className="bg-header bg-cover h-screen flex justify-center items-center" style={{ backgroundImage: `url(https://cdn.glitch.global/be758d61-a981-49f2-a7a6-72216e478708/jlz1000_88870_photo-realistic_image_of_a_gym_with_a_lounge_area_ec9e24eb-e19b-46e7-8449-97ca3e3d8892_upscayl_4x_realesrgan-x4plus-anime.png?v=1698691615805)` }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                <MemberCard />
                <MemberCard />
                <MemberCard />
            </div>
        </div>
    );
}