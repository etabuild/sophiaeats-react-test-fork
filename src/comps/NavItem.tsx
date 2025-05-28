type NavItemProps = {
    icon: string
    label: string
    onClick?: () => void
}

export const NavItem = ({ icon, label, onClick }: NavItemProps) => {
    return (
        <div className="navbarItems" onClick={onClick}>
            <div className="navbarItemIcon"><span
                className="material-symbols-rounded">{icon}</span>
            </div>
            <div className="navbarItemTitle">{label}
            </div>
        </div>
    )
}